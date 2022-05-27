var tmp=document.getElementById('delete-js');
        tmp.innerHTML+='<h5 id="xoa" class="card-title fw-bold">Learn React</h5><a id="delete" href="" class="btn btn-primary" style="background-color: purple ; float: right;" data-bs-toggle="modal" data-bs-target="#myModal">Delete</a>'
        function delete_js(){
            document.getElementById('delete-js').innerHTML='';
            document.getElementById('delete-js').innerText='';
        }