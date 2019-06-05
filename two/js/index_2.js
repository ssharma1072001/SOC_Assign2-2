function Filter() {
    var input, filter, table, tr, Search_str, i, str_value;
    input = document.getElementById("str");
    filter = input.value.toUpperCase();
    table = document.getElementById("Students");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      Search_str = tr[i].getElementsByTagName("td")[1];
      if (Search_str) {
        str_value = Search_str.textContent || Search_str.innerText;
        if (str_value.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }