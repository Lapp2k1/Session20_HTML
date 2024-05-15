let item = ["Backpack", "MiBand watch", "Ring"];
console.log(item);
let b=document.querySelector()
// 3. Lấy toàn bộ data từ items và tạo các thẻ <li>
items.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
  });
  
  // 4. Xóa các items test trong HTML
  ulElement.innerHTML = "";
  
  // 5. Cập nhật lại HTML theo UI sau:
  for (const item of items) {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
  }
  
  // 6. Lấy ra thẻ input 'New item' và nút 'Add'
  const newItemInput = document.querySelector("#new-item");
  const addButton = document.querySelector("#add-button");
  
  // 7. Bắt sự kiện click của nút 'Add'
  addButton.addEventListener("click", () => {
    const newItemValue = newItemInput.value;
    if (newItemValue) {
      items.push(newItemValue);
      // Cập nhật lại giao diện
      const newLiElement = document.createElement("li");
      newLiElement.textContent = newItemValue;
      ulElement.appendChild(newLiElement);
      // Reset input
      newItemInput.value = "";
    }
  });
  
  // 8. Thêm nút 'remove' cho mỗi item
  for (const item of items) {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
  }
  