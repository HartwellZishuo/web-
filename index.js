loadAll();

//添加数据    
function save() {
  var sitename = document.getElementById("sitename").value;
  var siteurl= document.getElementById("siteurl").value;
  localStorage.setItem(sitename,siteurl);
  alert("save Success!")
  loadAll();
}
//查询数据    
function findOne() {
  var search_site = document.getElementById("search_site").value;
  var siteurl = localStorage.getItem(search_site);
  var find_result= document.getElementById("find_result");
  find_result.innerHTML= search_site + "的网址是：" + siteurl;
}
//全查询
//将所有存储在localStorage中的对象提取出来，并展现到界面上
function loadAll(){
  var list = document.getElementById("list");
  if(localStorage.length>0){
    var result = "<table border='1'>";
    result += "<tr><td>key</td><td>value</td><td>操作</td></tr>";
    for(var i=0;i<localStorage.length;i++){
      var sitename = localStorage.key(i);
      var siteurl = localStorage.getItem(sitename);
      result += "<tr>" +
        "<td>"+sitename+"</td>" +
        "<td>"+siteurl+"</td>" +
        "<td><input type=button value=删除 onclick=del("+"'"+sitename+"'"+") ></td>" +
        "</tr>";
    }
    result += "</table>";
    list.innerHTML = result;
  }else{
    list.innerHTML = "数据为空……";
  }
}

//删除数据   
function del(name) {
  localStorage.removeItem(name);
  alert("删除成功!");
  loadAll();
}