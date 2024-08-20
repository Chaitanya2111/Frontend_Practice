
    import './style.css';

    function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const data = JSON.parse(this.responseText);
          document.getElementById('demo').innerHTML = data.title;
        }
      };
      xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
      xhttp.send();
    }
    
    document.getElementById('Btn').addEventListener('click',function(){
        loadDoc();
    });
    
    