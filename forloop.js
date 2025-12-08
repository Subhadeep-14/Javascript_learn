var n=0,i=0,j=0,N=5;
//n=prompt("Enter the number of steps you want");
//N=Number.parseInt(n);
 
 for(i=N;i>=0;i--){
     var s="";
     for(n=0;n<(N-i);n++)
     {
         s=s+" ";
     }
    for(j=0;j<i;j++){
        s=s+"*";

    }
    console.log(s+"\n");
    
}