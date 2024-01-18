document.addEventListener('DOMContentLoaded', (event) => {
  fetchClientes();
});

async function fetchClientes() {
  const url = 'http://localhost:8080/cliente/buscar'; // Ajuste para a URL do seu servidor
  try {
      const response = await fetch(url);
      const clientes = await response.json();
      const tableBody = document.querySelector('.records tbody');

      clientes.forEach(cliente => {
          const row = tableBody.insertRow();
          
          
          row.insertCell(0).textContent = cliente.nome;
          row.insertCell(1).textContent = cliente.telefone;
          row.insertCell(2).textContent = cliente.cpf;
          row.insertCell(3).textContent = cliente.email;
          
          
          const actionCell = row.insertCell(4);
          actionCell.innerHTML = `
          <button type="button" class="button-green" onclick="editarCliente('${cliente.id_cliente}')">Editar</button>
          <button type="button" class="button-red" data-cliente-id="${cliente.id_cliente}" onclick="deleteClient(event)">Excluir</button>
          <button type="button" class="button-blue" onclick="handleCarButton('${cliente.id_cliente}')">Carro</button>
          `;
      });
  } catch (error) {
      console.error('Erro ao buscar os clientes:', error);
  }
}

function deleteClient(event){
  const clienteId = event.target.getAttribute('data-cliente-id');
  if(confirm('Tem certeza que deseja excluir esse Cliente?')){
      fetch('http://localhost:8080/cliente/deletar/' + clienteId, {
          method:'DELETE'
      }).then(response => {
          if (response.status === 200) {
              location.reload();
          } else if (response.status === 400) {
              confirm('O cliente não pode ser excluído pois está associado a um pedido.');
          } else {
              console.error('Erro ao excluir cliente:', response.status);
          }
      })
      .catch(error => {
          console.error('Erro ao excluir cliente:', error);
      });
  }
}

function handleCarButton(clienteId, clienteNome) {
    sessionStorage.setItem('selectedClienteId', clienteId);
    sessionStorage.setItem('selectedClienteNome', clienteNome);
    redirectToCarPage(clienteId, clienteNome);
}





