
    let size = 4;
    let min = 0;
    let max = size - 1;
    
    let isMoved = false;
    let score = 0;
    
    let excludeIds = [];

    function load() {
        //alert("load");
        //Load the table
        let html = '<table border="1">';
        for(let row=0;row<size;row++) {
            html += '<tr>';
            for(let col=0;col<size;col++) {
                let id = row+""+col;
                html += '<td align="center" valign="center" height="40" width="40" id="'+id+'"></td>';
            }
            html += '</tr>';
        }
        html += '</table>';
        //alert(html);
        document.getElementById("canvas").innerHTML = html;

        let id1 = getId();
        let id2 = "";
        while(true){
            id2 = getId()
            if(id1 != id2)
            break;
        }
        document;getElementById
    }