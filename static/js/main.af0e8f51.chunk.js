(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(7),i=a.n(n),s=(a(12),a(2)),l=a(3),r=a(5),c=a(4),u=(a(13),a(1)),o=(a(14),a(0)),m=function(t){var e=t.id,a=t.defaultValue,n=t.range,i=t.step,s=t.callback,l=function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}(e);return Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("label",{className:"me-2 text-center",htmlFor:e,children:l[0].toUpperCase()+l.slice(1)}),Object(o.jsx)("input",{id:e,type:"range",step:i,min:n[0],max:n[1],defaultValue:a,onChange:function(t){var e=t.target;return s(Number(e.value))}})]})},d=function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,translateValue:0},t.getNextShift=function(){return t.state.step*t.state.itemWidth},t.getAvailableTranslate=function(){return(t.state.frameSize-t.props.images.length)*t.state.itemWidth},t.canSlideLeft=function(){return t.state.translateValue<=-t.getNextShift()},t.canSlideRight=function(){var e=t.getAvailableTranslate()+t.getNextShift();return t.state.translateValue>=e},t.handlePreviousButtonClick=function(){t.canSlideLeft()&&t.setState((function(e){return{translateValue:e.translateValue+t.getNextShift()}}))},t.handleNextButtonClick=function(){t.canSlideRight()&&t.setState((function(e){return{translateValue:e.translateValue-t.getNextShift()}}))},t.setStep=function(e){t.setState({translateValue:0,step:e})},t.setFrameSize=function(e){t.setState({translateValue:0,frameSize:e})},t.setItemWidth=function(e){t.setState({translateValue:0,itemWidth:e})},t.setAnimationDuration=function(e){t.setState({translateValue:0,animationDuration:e})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props.images,e=this.state,a=e.frameSize,n=e.itemWidth,i=e.animationDuration,s=e.translateValue;return Object(o.jsxs)("div",{className:" Carousel d-flex flex-column align-items-center ",children:[Object(o.jsx)("div",{className:"Carousel__container",style:{width:"".concat(n*a,"px")},children:Object(o.jsx)("ul",{className:"Carousel__list d-flex",style:{transform:"translateX(".concat(s,"px)"),transition:"transform ".concat(i,"ms")},children:t.map((function(t,e){return Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:t,alt:String(e),style:{width:"".concat(n,"px")}})},t)}))})}),Object(o.jsxs)("div",{className:" Carousel__control d-flex flex-column align-items-center ",children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("button",{className:"Carousel__control-button me-3",type:"button",onClick:this.handlePreviousButtonClick,disabled:!this.canSlideLeft(),children:"Previous"}),Object(o.jsx)("button",{type:"button",onClick:this.handleNextButtonClick,disabled:!this.canSlideRight(),children:"Next"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(m,{id:"width",step:10,range:[50,260],defaultValue:130,callback:this.setItemWidth}),Object(o.jsx)(m,{id:"frameSize",step:1,range:[1,5],defaultValue:3,callback:this.setFrameSize}),Object(o.jsx)(m,{id:"step",step:1,range:[1,5],defaultValue:3,callback:this.setStep}),Object(o.jsx)(m,{id:"animationDuration",step:100,range:[100,3e3],defaultValue:1e3,callback:this.setAnimationDuration})]})]})]})}}]),a}(u.Component),h=function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={images:["../img/1.png","../img/2.png","../img/3.png","../img/4.png","../img/5.png","../img/6.png","../img/7.png","../img/8.png","../img/9.png","../img/10.png"]},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state.images;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"App__title mb-3",children:"".concat(t.length,"-image carousel")}),Object(o.jsx)(d,{images:t})]})}}]),a}(u.Component);i.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.af0e8f51.chunk.js.map