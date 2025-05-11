function addProduct(){
	const name = document.getElementById("name").value;
	const buy = parseFloat(document.getElementById("buyPrice").value);
	const sell = parseFloat(document.getElementById("sellPrice").value);
	const quantity = parseInt(document.getElementById("quantity").value);

	const list = `
		<div class="list">
			<table>
				<td>${name}</td>
				<td>${buy}</td>
				<td>${sell}</td>
				<td>${quantity}</td>
				<td>${(sell - buy) * quantity}</td>
			</table>
		</div>
	`;
	document.getElementById("product-list").innerHTML += list;
	document.getElementById("product-form").reset()
}
