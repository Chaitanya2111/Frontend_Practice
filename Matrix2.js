
          
          var a = 3;
         
        
         function rotateMatrix(arr) {
            
            
             for (b = 0; b < a; b++) {
                 for (i = a - 1; i >= 0; i--)
                     document.write(arr[i][b] + " ");
                 document.write("<br/>");
             } 
         }
      
          
             var arr = [ [ 1, 2, 3],
                         [ 4, 5, 6],
                         [ 7, 8, 9] ];
             rotateMatrix(arr);
      
   

 