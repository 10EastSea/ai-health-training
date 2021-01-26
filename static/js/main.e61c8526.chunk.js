(this["webpackJsonpai-health-training"]=this["webpackJsonpai-health-training"]||[]).push([[0],{65:function(e,n,r){},69:function(e,n,r){"use strict";r.r(n);var i=r(4),t=r(11),s=r(7),a=r(14),c=r(15),o=r(18),u=r(16),l=r(19),d=r(0),h=r.n(d),p=r(10),g=r.n(p),b=r(20),m={exercises:{sit_up:{id:"sit_up",name:"sit_up",thumb:"/images/sit_up_icon.png"},push_up:{id:"push_up",name:"push_up",thumb:"/images/push_up_icon.png"},lunge:{id:"lunge",name:"lunge",thumb:"/images/lunge_icon.png"},squat:{id:"squat",name:"squat",thumb:"/images/squat_icon.png"},leg_raise:{id:"leg_raise",name:"leg_raise",thumb:"/images/leg_raise_icon.png"},shoulder_press:{id:"shoulder_press",name:"shoulder_press",thumb:"/images/shoulder_press_icon.png"}},columns:{"column-1":{id:"column-1",title:"All Exercises",exerciseIds:["sit_up","push_up","lunge","squat","leg_raise","shoulder_press"]},"column-2":{id:"column-2",title:"Today's Workout",exerciseIds:[]},"column-3":{id:"column-3",title:"Finished Workout",exerciseIds:[]}},columnOrder:["column-1","column-2"]},j=r(25);function x(){var e=Object(l.a)(["\n    border: 3px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-right: 8px;\n    background-color: ",";\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction:column;\n\n\n    &:focus {\n        outline: none;\n        border-color: red;\n    }\n"]);return x=function(){return e},e}var f=b.a.div(x(),(function(e){return e.isDragDisabled?"lightgrey":e.isDragging?"lightgreen":"white"})),O=function(e){Object(o.a)(r,e);var n=Object(u.a)(r);function r(){return Object(a.a)(this,r),n.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this;function n(){}return Object(i.jsx)(j.b,{draggableId:this.props.exercise.id,index:this.props.index,isDragDisabled:false,children:function(r,t){return Object(i.jsxs)(f,Object(s.a)(Object(s.a)(Object(s.a)({},r.draggableProps),r.dragHandleProps),{},{ref:r.innerRef,isDragging:t.isDragging,isDragDisabled:false,children:[Object(i.jsx)("button",{onClick:n,children:"Activate Lasers"}),Object(i.jsx)("img",{src:e.props.exercise.thumb,width:"75%",height:"75%",alt:""}),Object(i.jsxs)("strong",{children:[" ",e.props.exercise.name," "]})]}))}})}}]),r}(h.a.Component);function _(){var e=Object(l.a)(["\n    padding: 8px;\n    transition: background-color 0.2s ease;\n    background-color: ",";\n    width: 1887px;\n    height: 150px;\n    display: flex;\n"]);return _=function(){return e},e}function v(){var e=Object(l.a)(["\n    padding: 8px;\n"]);return v=function(){return e},e}function D(){var e=Object(l.a)(["\n    margin: 8px;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n\n    display: flex;\n    flex-direction:column;\n    "]);return D=function(){return e},e}var y=b.a.div(D()),k=b.a.h3(v()),I=b.a.div(_(),(function(e){return e.isDraggingOver?"skyblue":"transparent"})),P=function(e){Object(o.a)(r,e);var n=Object(u.a)(r);function r(){return Object(a.a)(this,r),n.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this;return Object(i.jsxs)(y,{children:[Object(i.jsx)(k,{children:this.props.column.title}),Object(i.jsx)(j.c,{droppableId:this.props.column.id,direction:"horizontal",isDropDisabled:this.props.isDropDisabled,children:function(n,r){return Object(i.jsxs)(I,Object(s.a)(Object(s.a)({ref:n.innerRef},n.droppableProps),{},{isDraggingOver:r.isDraggingOver,children:[e.props.exercises.map((function(e,n){return Object(i.jsx)(O,{exercise:e,index:n},e.id)})),n.placeholder]}))}})]})}}]),r}(h.a.Component),q=(r(63),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,78)).then((function(n){var r=n.getCLS,i=n.getFID,t=n.getFCP,s=n.getLCP,a=n.getTTFB;r(e),i(e),t(e),s(e),a(e)}))}),C=r(76),w=r(77),L=r(75);r(64),r(65);var F=function(){return Object(i.jsx)("div",{className:"Navigation",children:Object(i.jsxs)(C.a,{bg:"dark",variant:"dark",children:[Object(i.jsx)(C.a.Brand,{href:"#home",children:"AI Health Trainer"}),Object(i.jsxs)(w.a,{className:"mr-auto",children:[Object(i.jsx)(w.a.Link,{href:"#home",children:"Home"}),Object(i.jsxs)(L.a,{title:"Exercise Menu",id:"basic-nav-dropdown",children:[Object(i.jsx)(L.a.Item,{href:"./exercise_model/lunge.html",children:"Lunge"}),Object(i.jsx)(L.a.Item,{href:"./exercise_model/pushup.html",children:"Push Up"}),Object(i.jsx)(L.a.Item,{href:"./exercise_model/squat.html",children:"Squat"}),Object(i.jsx)(L.a.Item,{href:"./exercise_model/situp.html",children:"Sit Up"}),Object(i.jsx)(L.a.Item,{href:"./exercise_model/shoulderPress.html",children:"Shoulder Press"}),Object(i.jsx)(L.a.Item,{href:"./exercise_model/legRaise.html",children:"Leg Raise"})]})]})]})})};function R(){var e=Object(l.a)(["\n  display:flex;\n  flex-direction:column;\n"]);return R=function(){return e},e}var S=b.a.div(R());h.a.Component;g.a.render(Object(i.jsx)(F,{}),document.getElementById("root")),q()}},[[69,1,2]]]);
//# sourceMappingURL=main.e61c8526.chunk.js.map