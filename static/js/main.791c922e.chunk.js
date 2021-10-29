(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),o=n(2),i=n(3),l=n.n(i),u=n(0),b=function(e){var t=e.contacts,n=e.setContacts,c=Object(a.useState)(""),s=Object(o.a)(c,2),r=s[0],i=s[1];return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)("h3",{children:"Find contacts by name:"}),Object(u.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)}}),Object(u.jsx)("ul",{className:l.a.list,children:function(){var e=r.toLowerCase();return r?t.filter((function(t){return t.name.toLowerCase().includes(e)})):t}().map((function(e){var a=e.id,c=e.name,s=e.number;return Object(u.jsxs)("li",{className:l.a.contact,children:[Object(u.jsxs)("div",{className:l.a.name,children:[" ",c]}),Object(u.jsx)("div",{className:l.a.number,children:s}),Object(u.jsx)("button",{onClick:function(){!function(e){n((function(){return t.filter((function(t){return t.id!==e}))}))}(a)},className:l.a.button,children:"Delete contact"})]},a)}))})]})},j=n(9),d=n(18),m=n(7),h=n.n(m),O=function(e){var t=e.setContacts,n=e.contacts,c=Object(a.useState)(""),s=Object(o.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(""),b=Object(o.a)(l,2),m=b[0],O=b[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("label",{className:h.a.label,children:"Name"})}),Object(u.jsx)("input",{type:"text",name:"name",value:r,onChange:function(e){i(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(u.jsx)("div",{children:Object(u.jsx)("label",{className:h.a.label,children:"Number"})}),Object(u.jsx)("input",{type:"tel",name:"number",value:m,onChange:function(e){O(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),1===n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})).length&&alert("".concat(r," is already in your Contacts.")),""===r||""===m?alert("Add name and number!"):(t([].concat(Object(j.a)(n),[{id:Object(d.a)(),name:r,number:m}])),i(""),O(""))},className:"floatingButton",children:"Add contact"})})]}),Object(u.jsx)("hr",{})]})},x=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(O,{contacts:n,setContacts:c}),Object(u.jsx)(b,{contacts:n,setContacts:c})]})};n(15);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={list:"Contacts_list__2A9Va",contact:"Contacts_contact__1A7SU",name:"Contacts_name__3hIgB",number:"Contacts_number__161Az",button:"Contacts_button__2P8jH"}},7:function(e,t,n){e.exports={label:"PhonebookForm_label__2kRuj"}}},[[16,1,2]]]);
//# sourceMappingURL=main.791c922e.chunk.js.map