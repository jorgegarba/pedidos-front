(this["webpackJsonpreact-enrutamiento2"]=this["webpackJsonpreact-enrutamiento2"]||[]).push([[0],{118:function(e,a){},143:function(e,a,t){},144:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(16),l=t.n(c),o=t(9),s=t(8),m=t(17),i=t(3),u=t(4),d=Object(n.createContext)(),p=t(5),E=t.n(p),b=t(11),f="https://5f35f3e65b91f60016ca524a.mockapi.io",v="https://codigo3-pedidos.herokuapp.com",h=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/registro"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/verificar"),{method:"POST",headers:{Authorization:"Bearer ".concat(a)}});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.ok);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(E.a.mark((function e(a,t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/login"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({correo:a,password:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),g=function(e){var a=e.history,t=Object(n.useContext)(d).iniciarSesion,c=Object(n.useState)({email:"",password:""}),l=Object(u.a)(c,2),o=l[0],s=l[1],p=function(e){s(Object(i.a)(Object(i.a)({},o),{},Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement("main",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("h1",null,"Inicio de Sesi\xf3n"),r.a.createElement("form",{className:"formulario",onSubmit:function(e){e.preventDefault(),_(o.email,o.password).then((function(e){e.ok&&(t(e.token),a.replace("/pos"))}))}},r.a.createElement("label",{for:""},"Email:"),r.a.createElement("input",{type:"email",className:"formulario__input",placeholder:"Email",name:"email",value:o.email,onChange:p}),r.a.createElement("label",{for:""},"Password:"),r.a.createElement("input",{type:"password",className:"formulario__input",placeholder:"Password",name:"password",value:o.password,onChange:p}),r.a.createElement("button",{className:"formulario__submit",type:"submit"},"Iniciar Sesi\xf3n"))))},O=function(e){var a=e.history,t=Object(n.useContext)(d).iniciarSesion,c=Object(n.useState)({usu_email:"",usu_nom:"",usu_ape:"",pass1:"",pass2:"",error:!1}),l=Object(u.a)(c,2),o=l[0],s=l[1],p=function(e){s(Object(i.a)(Object(i.a)({},o),{},Object(m.a)({},e.target.name,e.target.value)))},E=o.usu_ape,b=o.usu_email,f=o.usu_nom,v=o.pass1,N=o.pass2;return r.a.createElement("main",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("h1",null,"Crear Cuenta"),r.a.createElement("form",{className:"formulario",onSubmit:function(e){if(e.preventDefault(),""!==E.trim()&&""!==f.trim()&&""!==b.trim()&&""!==v.trim()&&v===N){var n=Object(i.a)(Object(i.a)({},o),{},{password:v,usu_tipo:"admin"});h(n).then((function(e){console.log(e),e.ok&&(t(e.token),a.replace("/pos"))}))}}},r.a.createElement("label",{htmlFor:""},"Nombre:"),r.a.createElement("input",{type:"text",className:"formulario__input",placeholder:"Nombre",onChange:p,value:o.usu_nom,name:"usu_nom"}),r.a.createElement("label",{htmlFor:""},"Apellido:"),r.a.createElement("input",{type:"text",className:"formulario__input",placeholder:"Apellido",onChange:p,name:"usu_ape",value:o.usu_ape}),r.a.createElement("label",{htmlFor:""},"Email:"),r.a.createElement("input",{type:"email",className:"formulario__input",placeholder:"Email",name:"usu_email",value:o.usu_email,onChange:p}),r.a.createElement("label",{htmlFor:""},"Password:"),r.a.createElement("input",{type:"password",className:"formulario__input",placeholder:"Password",name:"pass1",value:o.pass1,onChange:p}),r.a.createElement("label",{htmlFor:""},"Repita Password:"),r.a.createElement("input",{type:"password",className:"formulario__input",placeholder:"Password",name:"pass2",value:o.pass2,onChange:p}),r.a.createElement("button",{className:"formulario__submit",type:"submit"},"Registrarse"))))},j=function(){return r.a.createElement("div",null,"P\xc1GINA DE RECURPERACI\xd3N DE CONTRASE\xd1A")},C=(t(85),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/auth/login",component:g}),r.a.createElement(s.b,{path:"/auth/register",component:O}),r.a.createElement(s.b,{path:"/auth/recover",component:j}),r.a.createElement(s.a,{to:"/auth/login"})))}),y=t(33),x=t.n(y),w=function(){var e=Object(n.useState)({pedidos:"cargando...",mesas:"cargando...",categorias:"cargando..."}),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){var e=x()(v);e.on("connect",(function(){e.emit("peticion-reporte-dashboard")})),e.on("reporte-dashboard",(function(e){var a=JSON.parse(e);console.log(e),c(a)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"display-4 text-center"},"DASHBOARD"))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title text-center"},"Pedidos")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"display-4 text-center"},t.pedidos)))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title text-center"},"Mesas")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"display-4 text-center"},t.mesas)))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title text-center"},"Categorias")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"display-4 text-center"},t.categorias))))))},S=function(){return r.a.createElement("div",null,"P\xe1gina de AdminCategorias")},k=function(){var e=Object(b.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/mesa"));case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/mesas/").concat(a),{method:"DELETE"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/mesas"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/mesas/").concat(a.mesa_id),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),M=t(18),R=t.n(M),D=function(e){var a=e.obtenerMesas,t=e.modo,c=e.mesa,l=e.setModo,o=e.setMesa,s=Object(n.useState)({mesa_nro:"",mesa_cap:0}),d=Object(u.a)(s,2),p=d[0],E=d[1];Object(n.useEffect)((function(){"editar"===t&&E(c)}),[c,t]);var b=function(e){E(Object(i.a)(Object(i.a)({},p),{},Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p.mesa_cap>0&&""!==p.mesa_nro.trim()&&("crear"===t?A(p).then((function(e){e.mesa_id&&(E({mesa_nro:"",mesa_cap:0}),a(),R.a.fire({title:"Hecho!",icon:"success",text:"Registro creado exitosamente",position:"top-end",timer:1500,showConfirmButton:!1}))})):I(p).then((function(e){e.mesa_id&&(E({mesa_nro:"",mesa_cap:0}),a(),l("crear"),o({}),R.a.fire({icon:"success",title:"Registro correctamente actualizado",timer:1500,position:"top-end",showConfirmButton:!1}))})))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Nro. mesa:"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"n\xfamero de mesa",value:p.mesa_nro,name:"mesa_nro",onChange:b})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Capacidad:"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Capacidad...",name:"mesa_cap",onChange:b,value:p.mesa_cap})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"crear"===t?r.a.createElement(r.a.Fragment,null,"Crear"):r.a.createElement(r.a.Fragment,null,"Guardar Cambios")),r.a.createElement("button",{className:"btn btn-secondary ml-3",type:"button"},"Cancelar")))))))},L=t(34),T=function(e){var a=e.tipo,t=void 0===a?"info":a,n=e.texto,c="alert alert-".concat(t);return r.a.createElement("div",{className:c,role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"Cargando"),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-spinner fa-2x fa-spin"})),r.a.createElement("p",null,n))},F=function(e){var a=e.mesas,t=e.loading,n=e.obtenerMesas,c=e.setMesa,l=e.setModo,o={columns:[{label:"ID",field:"mesa_id"},{label:"Nro mesa",field:"mesa_nro"},{label:"Capacidad",field:"mesa_cap"},{label:"Acciones",field:"mesa_acciones"}],rows:a.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{mesa_cap:e.mesa_cap+" personas",mesa_acciones:r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){var a;a=e.mesa_id,R.a.fire({icon:"error",text:"Los cambios son irreversibles",title:"\xbfSeguro que desea eliminar el registro?",showCancelButton:!0,confirmButtonText:"ELIMINAR",confirmButtonColor:"#de0a0a"}).then((function(e){e.value&&P(a).then((function(e){e.mesa_id?(n(),R.a.fire({icon:"success",title:"Eliminado correctamente",timer:1500,position:"top-end",showConfirmButton:!1})):R.a.fire({icon:"error",title:"Hubieron errores en el servidor"})}))}))}},"Eliminar"),r.a.createElement("button",{className:"btn btn-warning ml-2",onClick:function(){!function(e){l("editar"),c(e)}(e)}},"Editar"))})}))};return r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-body"},t?r.a.createElement(T,{texto:"Cargando los datos"}):r.a.createElement(L.c,{searchLabel:"Buscar",infoLabel:["Mostrando","al","de","registros"],hover:!0,striped:!0,bordered:!0,entriesOptions:[5,20,25],entries:5,pagesAmount:4,data:o})))))},B=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),s=o[0],m=o[1],i=Object(n.useState)("crear"),d=Object(u.a)(i,2),p=d[0],E=d[1],b=Object(n.useState)({}),f=Object(u.a)(b,2),v=f[0],h=f[1],N=function(){k().then((function(e){c(e),m(!1)}))};return Object(n.useEffect)((function(){N()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"text-center"},"Mantenimiento de Mesas"))),r.a.createElement(D,{obtenerMesas:N,modo:p,mesa:v,setModo:E,setMesa:h}),r.a.createElement(F,{mesas:t,loading:s,obtenerMesas:N,setMesa:h,setModo:E}))},G=function(){var e=Object(b.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/pedido"));case 2:return a=e.sent,t=a.json(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/pedido/").concat(a));case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/pedido"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Y=function(e){var a=e.history,t=Object(n.useState)([]),c=Object(u.a)(t,2),l=c[0],o=c[1];Object(n.useEffect)((function(){G().then((function(e){e.ok&&o(e.pedidos)}))}),[]);var s={columns:[{label:"ID",field:"pedido_id"},{label:"Nro. Pedido",field:"pedido_nro"},{label:"Fecha",field:"pedido_fech"},{label:"Estado",field:"pedido_est"},{label:"Nro Mesa",field:"mesa_nro"},{label:"Acciones",field:"acciones"}],rows:l.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{pedido_est:"pagado"===e.pedido_est?r.a.createElement("span",{className:"badge badge-success"},"Pagado"):r.a.createElement("span",{className:"badge badge-danger"},"Anulado"),mesa_nro:e.Mesa.mesa_nro,acciones:r.a.createElement("button",{className:"btn btn-block btn-dark",onClick:function(){var t;t=e.pedido_id,a.push("/admin/pedidos/".concat(t))}},"Ver Detalles")})}))};return r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-body"},r.a.createElement(L.c,{responsive:!0,hover:!0,striped:!0,bordered:!0,data:s})))))},Z=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"text-center"},"Pedidos"))),r.a.createElement(Y,{history:e.history}))},z=function(){return r.a.createElement("div",null,"P\xe1gina de admin platos")},H=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"!#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavId"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{exact:!0,to:"/admin/dashboard",className:"nav-link",activeClassName:"active"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{exact:!0,to:"/admin/mesas",className:"nav-link",activeClassName:"active"},"Mesas")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{exact:!0,to:"/admin/categorias",className:"nav-link",activeClassName:"active"},"Categorias")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{exact:!0,to:"/admin/platos",className:"nav-link",activeClassName:"active"},"Platos")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{exact:!0,to:"/admin/pedidos",className:"nav-link",activeClassName:"active"},"Pedidos"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))))},W=function(e){var a=e.history,t=Object(s.g)().pedido_id,c=Object(n.useState)({}),l=Object(u.a)(c,2),o=l[0],m=l[1],i=Object(n.useState)(!0),d=Object(u.a)(i,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){J(t).then((function(e){e.ok&&m(e.pedido),E(!1)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"text-center"},"Detalle de Pedido"),p&&r.a.createElement(T,{tipo:"info",texto:"Cargando detalle de pedido"}))),!p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Pedido")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Nro Pedido: "),o.pedido_nro),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Estado: ")," ","pagado"===o.pedido_est?r.a.createElement("span",{className:"badge badge-success"},"Pagado"):r.a.createElement("span",{className:"badge badge-danger"},"Anulado")),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Fecha: "),o.pedido_fech)))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Mesa")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Nro Mesa: "),o.Mesa.mesa_nro),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Capacidad: "),o.Mesa.mesa_cap," personas.")))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Trabajador")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Nombre: "),o.Usuario.usu_nom),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Apellido: "),o.Usuario.usu_ape),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Tipo: "),o.Usuario.usu_tipo))))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"card-title"},"Detalle del Pedido")),r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{className:"table table-hover table-striped table-bordered text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Cant."),r.a.createElement("th",null,"Descripci\xf3n"),r.a.createElement("th",null,"Imagen"),r.a.createElement("th",null,"P. Unitario"),r.a.createElement("th",null,"P. Total"))),r.a.createElement("tbody",null,o.PedidoPlatos.map((function(e,a){return r.a.createElement("tr",{key:e.pedidoplato_id},r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.pedidoplato_cant),r.a.createElement("td",null,e.Plato.plato_nom),r.a.createElement("td",null,r.a.createElement("img",{src:e.Plato.plato_img,style:{height:"100px"},alt:"imagen del plato"})),r.a.createElement("td",null,"S/ ",e.Plato.plato_pre),r.a.createElement("td",null,"S/"," ",(+e.pedidoplato_cant*+e.Plato.plato_pre).toFixed(2)))})))))))),r.a.createElement("div",{className:"row mt-4 justify-content-end"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("button",{className:"btn btn-block btn-dark",onClick:function(){a.push("/admin/pedidos")}},r.a.createElement("i",{className:"fas fa-chevron-left"})," Atr\xe1s")))))},q=(t(142),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement("main",{className:"container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/admin/dashboard",component:w}),r.a.createElement(s.b,{path:"/admin/categorias",component:S}),r.a.createElement(s.b,{path:"/admin/mesas",component:B}),r.a.createElement(s.b,{path:"/admin/pedidos/:pedido_id",component:W}),r.a.createElement(s.b,{path:"/admin/pedidos",component:Z}),r.a.createElement(s.b,{path:"/admin/platos",component:z}),r.a.createElement(s.a,{to:"/admin/dashboard"}))))}),V=function(){return r.a.createElement("div",null,"LANDING PAGE DEL PROYECTO")},$=function(){return r.a.createElement("div",null,"P\xc1GINA DE NOSOTROS")},K=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/nosotros",component:$}),r.a.createElement(s.b,{path:"/",component:V}))},Q=Object(n.createContext)(),X=function(e){var a=e.objMesa,t=Object(n.useContext)(Q),c=t.globalObjMesa,l=t.seleccionarMesa;return r.a.createElement("li",{className:"mesas__mesa ".concat((null===c||void 0===c?void 0:c.mesa_id)===a.mesa_id&&"activo"),onClick:function(){l(a)}},r.a.createElement("span",{className:"mesas__titulo"},"Mesa"),r.a.createElement("span",{className:"mesas__numero"},a.mesa_nro))},ee=function(){return r.a.createElement("div",{className:"spinner-border text-light",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},ae=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){var e=x()(v);e.on("connect",(function(){console.log("CONECTADO! =)")})),e.on("mesas-lista",(function(e){var a=JSON.parse(e);c(a)})),e.on("disconnect",(function(){console.log("DESCONECTADO =(")}))}),[]),Object(n.useEffect)((function(){k().then((function(e){e.ok&&(c(e.content),m(!1))}))}),[]),r.a.createElement("div",{className:"mesas"},r.a.createElement("ul",{className:"mesas__lista"},s&&r.a.createElement(ee,null),!s&&t.map((function(e){return r.a.createElement(X,{objMesa:e,key:e.mesa_id})}))),r.a.createElement("div",{className:"mesas__info"}))},te=function(e){var a=Object(n.useState)({result:null,loading:!0}),t=Object(u.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(b.a)(E.a.mark((function a(){var t,n;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(v).concat(e));case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,c({result:n,loading:!1});case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),r},ne=function(){var e=te("/categoria"),a=e.result,t=e.loading,c=Object(n.useContext)(Q),l=c.seleccionarCategoria,o=c.globalObjCategoria;return r.a.createElement("div",{className:"carta__categorias"},t&&r.a.createElement(ee,null),!t&&a.content.map((function(e){var a=(null===o||void 0===o?void 0:o.categoria_id)===e.categoria_id?"activo":"";return r.a.createElement("button",{className:"boton boton-outline-primary ".concat(a),key:e.categoria_id,onClick:function(){l(e)}},e.categoria_nom)})))},re=function(e){var a=e.objPlato,t=Object(n.useContext)(Q).incrementarPlato;return r.a.createElement("div",{className:"carta__plato"},r.a.createElement("img",{src:a.plato_img,alt:"Imagen del plato"}),r.a.createElement("h4",{className:"carta__titulo"},a.plato_nom),r.a.createElement("span",{className:"carta__precio"},"S/ ",a.plato_pre),r.a.createElement("div",{className:"carta__botones"},r.a.createElement("button",{className:"boton boton-outline-primary boton-restar"},"-1"),r.a.createElement("button",{className:"boton boton-outline-primary boton-sumar",onClick:function(){t(a.plato_id)}},"+1")))},ce=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/categoria/").concat(a,"/platos"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),le=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useContext)(Q).globalObjCategoria;return Object(n.useEffect)((function(){l&&ce(l.categoria_id).then((function(e){console.log(e),e.ok&&c(e.content.Platos)}))}),[l]),r.a.createElement("div",{className:"carta__platos"},t.map((function(e){return r.a.createElement(re,{objPlato:e,key:e.plato_id})})))},oe=function(e){var a=e.pedidoItem,t=te("/plato/".concat(a.plato_id)),n=t.loading,c=t.result;return n?r.a.createElement(ee,null):r.a.createElement("li",{className:"comanda__item"},r.a.createElement("p",{className:"comanda__nombre"},r.a.createElement("span",null,r.a.createElement("strong",null,c.content.plato_nom)),r.a.createElement("span",null,"Precio: S/ ",c.content.plato_pre)),r.a.createElement("p",{className:"comanda__cantidad"},a.pedidoplato_cant),r.a.createElement("p",{className:"comanda__precio"},r.a.createElement("strong",null,"S/"," ",(+c.content.plato_pre*+a.pedidoplato_cant).toFixed(2))))},se=function(){var e=Object(n.useContext)(Q),a=e.globalPedidos,t=e.globalObjMesa,c=a.find((function(e){return e.mesa_id===t.mesa_id}));return r.a.createElement("ul",{className:"comanda__lista"},c?c.pedidoplatos.map((function(e,a){return r.a.createElement(oe,{key:a,pedidoItem:e})})):r.a.createElement("strong",null,"No hay pedidos en esta mesa \ud83d\ude44"))},me=function(){var e=Object(n.useContext)(Q),a=e.globalObjMesa,t=e.globalPagar;return r.a.createElement("section",{className:"tabla"},r.a.createElement(ae,null),r.a.createElement("div",{className:"pedido"},r.a.createElement("div",{className:"carta"},r.a.createElement(ne,null),r.a.createElement(le,null)),r.a.createElement("div",{className:"boleta"},r.a.createElement("h3",null,"Pedido"),r.a.createElement("div",{className:"comanda"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"comanda__mesa"},"Mesa ",a.mesa_nro),r.a.createElement("p",{className:"comanda__usuario"},"Carlos Jimenez"),r.a.createElement("hr",null),r.a.createElement(se,null),r.a.createElement("button",{className:"boton boton-success boton-block",onClick:function(){t()}},"PAGAR")):r.a.createElement("strong",null,"No hay ninguna mesa seleccionada \ud83d\ude2a")))))},ie=(t(143),Object(s.h)((function(e){var a=e.history,t=Object(n.useContext)(d),c=t.usu_nom,l=t.cerrarSesion;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("img",{src:"/assets/img/logo.svg",alt:""})),r.a.createElement("div",{className:"header__buscador"},r.a.createElement("img",{src:"/assets/img/search.svg",alt:""}),r.a.createElement("input",{type:"text",className:"header__input",placeholder:"Busca un t\xe9rmino"})),r.a.createElement("div",{className:"header__usuario"},r.a.createElement("img",{src:"https://randomuser.me/api/portraits/men/90.jpg",alt:""}),r.a.createElement("span",null,c),r.a.createElement("button",{className:"boton boton-success",onClick:function(){l(),a.replace("/")}},"Cerrar Sesi\xf3n")))}))),ue=function(){var e=Object(n.useContext)(Q);return console.log(e),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"menu__lista"},r.a.createElement("li",null,r.a.createElement("img",{src:"/assets/img/plato_blanco.svg",alt:""}),r.a.createElement("span",null,"Bebidas")),r.a.createElement("li",null,r.a.createElement("img",{src:"/assets/img/plato_blanco.svg",alt:""}),r.a.createElement("span",null,"Bebidas")),r.a.createElement("li",null,r.a.createElement("img",{src:"/assets/img/plato_blanco.svg",alt:""}),r.a.createElement("span",null,"Bebidas")),r.a.createElement("li",null,r.a.createElement("img",{src:"/assets/img/plato_blanco.svg",alt:""}),r.a.createElement("span",null,"Bebidas"))))},de=t(27),pe=function(e,a){switch(a.type){case"SELECCIONAR_MESA":return Object(i.a)(Object(i.a)({},e),{},{globalObjMesa:a.data});case"SELECCIONAR_CATEGORIA":return Object(i.a)(Object(i.a)({},e),{},{globalObjCategoria:a.data});case"ACTUALIZAR_GLOBAL_PEDIDOS":return Object(i.a)(Object(i.a)({},e),{},{globalPedidos:a.data})}},Ee=t(78),be=t.n(Ee),fe=function(e){var a=Object(n.useReducer)(pe,{globalObjMesa:null,globalObjCategoria:null,globalPedidos:[]}),t=Object(u.a)(a,2),c=t[0],l=t[1],o=Object(n.useContext)(d).usu_id;return r.a.createElement(Q.Provider,{value:{globalObjMesa:c.globalObjMesa,globalObjCategoria:c.globalObjCategoria,globalPedidos:c.globalPedidos,seleccionarCategoria:function(e){l({type:"SELECCIONAR_CATEGORIA",data:Object(i.a)({},e)})},seleccionarMesa:function(e){l({type:"SELECCIONAR_MESA",data:Object(i.a)({},e)})},incrementarPlato:function(e){var a=c.globalObjMesa,t=c.globalPedidos;if(a){var n=t.find((function(e){return e.mesa_id===a.mesa_id}));if(n){if(n.pedidoplatos.find((function(a){return a.plato_id===e}))){var r=Object(de.a)(t.map((function(t){return t.mesa_id===a.mesa_id?(t.pedidoplatos.forEach((function(a){a.plato_id===e&&(a.pedidoplato_cant=a.pedidoplato_cant+1)})),t):t})));l({type:"ACTUALIZAR_GLOBAL_PEDIDOS",data:r})}else{var o=Object(de.a)(t.map((function(t){return t.mesa_id===a.mesa_id?(t.pedidoplatos.push({plato_id:e,pedidoplato_cant:1}),t):t})));l({type:"ACTUALIZAR_GLOBAL_PEDIDOS",data:o})}}else{var s=[].concat(Object(de.a)(t),[{mesa_id:a.mesa_id,pedido_nro:"1000",pedido_est:"pendiente",pedidoplatos:[{plato_id:e,pedidoplato_cant:1}]}]);l({type:"ACTUALIZAR_GLOBAL_PEDIDOS",data:s})}}},globalPagar:function(){var e=c.globalPedidos,a=c.globalObjMesa,t=e.find((function(e){return e.mesa_id===a.mesa_id})),n=be()().format("YYYY-MM-DD hh:mm:ss");t.pedido_fech=n,t.usu_id=o,U(t).then((function(t){if(t.ok){var n=Object(de.a)(e.filter((function(e){return e.mesa_id!==a.mesa_id})));l({type:"ACTUALIZAR_GLOBAL_PEDIDOS",data:n})}}))}}},e.children)},ve=function(){return r.a.createElement(fe,null,r.a.createElement(ie,null),r.a.createElement("main",{className:"pos-container"},r.a.createElement(ue,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/pos",component:me}))))},he=function(e){var a=e.path,t=e.componente,c=Object(n.useContext)(d),l=c.autenticado;return c.cargando?r.a.createElement("h5",null,"Cargando..."):l?r.a.createElement(s.b,{path:a,component:t}):r.a.createElement(s.a,{to:"/"})},Ne=function(){return r.a.createElement(o.a,{basename:"/"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/auth",component:C}),r.a.createElement(he,{path:"/admin",componente:q}),r.a.createElement(he,{path:"/pos",componente:ve}),r.a.createElement(s.b,{path:"/",component:K})))},_e=function(e,a){switch(a.type){case"INICIAR_SESION":return{autenticado:!0,usu_nom:a.data.usu_nom,usu_id:a.data.usu_id,token:a.data.token,cargando:!1};case"CERRAR_SESION":return localStorage.removeItem("token"),{autenticado:!1,usu_nom:null,usu_id:null,token:null,cargando:!1};default:return Object(i.a)({},e)}},ge=function(e){var a=Object(n.useReducer)(_e,{autenticado:!1,usu_nom:null,usu_id:null,token:null,cargando:!0}),t=Object(u.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token"),a=e.split(".")[1],t=window.atob(a),n=JSON.parse(t);N(e).then((function(a){l(a?{type:"INICIAR_SESION",data:Object(i.a)(Object(i.a)({},n),{},{token:e})}:{type:"CERRAR_SESION"})}))}};return r.a.createElement(d.Provider,{value:{autenticado:c.autenticado,usu_nom:c.usu_nom,usu_id:c.usu_id,cargando:c.cargando,iniciarSesion:function(e){var a=e.split(".")[1],t=window.atob(a),n=JSON.parse(t);localStorage.setItem("token",e),l({type:"INICIAR_SESION",data:Object(i.a)(Object(i.a)({},n),{},{token:e})})},cerrarSesion:function(){l({type:"CERRAR_SESION"})}}},e.children)},Oe=function(){return r.a.createElement(ge,null,r.a.createElement(Ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t(144)},85:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.3c0da4f8.chunk.js.map