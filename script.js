    function generate(){
      const weights = document.getElementById("weights").value.split(",").map(Number);
      const values = document.getElementById("values").value.split(",").map(Number);
      const capacity = parseInt(document.getElementById("capacity").value);
      const n = values.length;
      
      const table = document.createElement("table");
      let dp=[];
      
      for (let i = 0; i <= n; i++) {
        const row = document.createElement("tr");
        dp[i]=[];
        
        for (let j = 0; j <= capacity; j++) {
          if (i == 0 || j == 0)
            dp[i][j] = 0;
          else if (weights[i - 1]<=j)
            dp[i][j]=max(values[i-1]+ dp[i-1][j-weights[i-1]], dp[i-1][j]);
          else
            dp[i][j]=dp[i-1][j];
          
          const cell = document.createElement("td");
          cell.textContent = dp[i][j];
          row.appendChild(cell);
        }
        table.appendChild(row);
        
        }
      tablecontainer=document.getElementById("table")
      tablecontainer.innerHTML = '';
      tablecontainer.appendChild(table);
      document.getElementById("maxprofit").innerHTML = "Maximum profit obtainable is:  "+dp[n][capacity];
      
    }
    function max(a, b)
    {
      return (a > b) ? a : b;
    }
