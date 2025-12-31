let url="https://jsonplaceholder.typicode.com/posts/1";
async function fetchData(){
    let response = await fetch(url);
    console.log("response =",response);
    let data=await response.json();
    console.log("data = ",data.body);
}
fetchData();
