"use strict";(self.webpackChunksocial=self.webpackChunksocial||[]).push([[750],{750:function(e,t,s){s.r(t),s.d(t,{default:function(){return J}});var o=s(1413),a=s(5671),r=s(3144),n=s(136),i=s(516),l=s(2791),c=s(81),u=s(1134),d="MyPosts_myPostsBlock__P9BSh",h="MyPosts_textarea__h40XN",p="MyPosts_addPostButton__ZQeBE",f=s(232),m="Post_postBlock__4dBpC",x=s(184),g=function(e){var t=e.message,s=e.likesCount;return(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/128/149/149071.png",alt:""}),t,(0,x.jsxs)("div",{children:["like ",s]})]})},j=function(e){var t=e.createNewPost,s=e.posts,a=(0,u.cI)({defaultValues:{text:""}}),r=a.register,n=a.handleSubmit,i=a.reset,l=a.formState.errors,c=s.map((function(e){return(0,x.jsx)(g,{message:e.postText,likesCount:e.likesCount},e.id)}));return(0,x.jsxs)("div",{className:d,children:[(0,x.jsxs)("form",{onSubmit:n((function(e){t(e.text),i()}),(function(e){console.log(e)})),children:[(0,x.jsxs)("div",{className:f.Z.formControl+" "+(l.text&&f.Z.error),children:[(0,x.jsx)("textarea",(0,o.Z)({className:h,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."},r("text",{required:!0,maxLength:150}))),l.text&&"required"===l.text.type&&(0,x.jsx)("span",{children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),l.text&&"maxLength"===l.text.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 150 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsx)("button",{className:p,children:"Add Post"})]}),c]})},v=s(8687),b=(0,v.$j)((function(e){return{posts:e.profilePage.posts}}),{createNewPost:c.ed,resetForm:c.Fx})(j),k=s(9439),Z=s(7942),P=s(4377),_="Profile_mainImage__XlsU7",N="Profile_profileBlock__XPxZ7",y="Profile_avatar__k6Eoq",C="Profile_contactsLink__GqdWj",L="Profile_userName__iGbf6",F="Profile_buttonUploadPhoto__-4BCP",M="Profile_buttonLabel__ERPTk",S="Profile_mainPhotoContainer__UR2rc",w="Profile_profileItems__pNSkk",T=function(e){var t,s,a,r,n,i,c,d,h,p,m,g,j,v,b,T,A=(0,l.useState)(!1),q=(0,k.Z)(A,2),I=q[0],D=q[1],B=(0,l.useState)(!1),J=(0,k.Z)(B,2),G=J[0],E=J[1],U=(0,l.useState)(e.status),R=(0,k.Z)(U,2),V=R[0],W=R[1],X=(0,u.cI)({defaultValues:e.profile}),$=X.register,H=X.handleSubmit,O=X.reset,Y=X.formState.errors;(0,l.useEffect)((function(){W(e.status)}),[e.status]),(0,l.useEffect)((function(){O(e.profile)}),[e.profile,O]);return e.profile?(0,x.jsxs)("div",{children:[(0,x.jsx)("img",{className:_,src:"https://c.wallhere.com/photos/12/e1/sky_clouds_sunset_air-26035.jpg!d",alt:""}),(0,x.jsxs)("div",{className:N,children:[(0,x.jsxs)("div",{className:S,children:[(0,x.jsx)("img",{className:y,src:e.profile.photos.large?e.profile.photos.large:P,alt:""}),e.isMyProfilePage&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("input",{id:"uploadPhoto",type:"file",className:F,onChange:function(t){e.uploadPhotoTC(t.currentTarget.files[0])}}),(0,x.jsx)("label",{htmlFor:"uploadPhoto",className:M})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{className:L,children:e.profile.fullName}),!I&&(e.isMyProfilePage?(0,x.jsxs)("p",{onDoubleClick:function(){D(!0)},children:[" \u0421\u0442\u0430\u0442\u0443\u0441: ",e.status||"------"]}):(0,x.jsx)("p",{children:e.status||"------"})),I&&(0,x.jsx)("input",{autoFocus:!0,onBlur:function(){D(!1),e.updateStatusTC(V)},type:"text",value:V,onChange:function(e){W(e.currentTarget.value)}}),!G&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("p",{className:w,children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",e.profile.aboutMe]}),(0,x.jsxs)("p",{className:w,children:["\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: ",e.profile.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"]}),(0,x.jsxs)("p",{className:w,children:["\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438: ",e.profile.lookingForAJobDescription]}),e.isMyProfilePage&&(0,x.jsx)("button",{onClick:function(){return E(!0)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),(0,x.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),e.profile.contacts.facebook&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.facebook,children:"Facebook"}),e.profile.contacts.website&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.website,children:"WebSite"}),e.profile.contacts.vk&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.vk,children:"VK"}),e.profile.contacts.twitter&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.twitter,children:"Twitter"}),e.profile.contacts.instagram&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.instagram,children:"Instagram"}),e.profile.contacts.youtube&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.youtube,children:"YouTube"}),e.profile.contacts.github&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.github,children:"GitHub"}),e.profile.contacts.mainLink&&(0,x.jsx)("a",{target:"_blank",className:C,href:"//"+e.profile.contacts.mainLink,children:"MainLink"})]}),G&&e.profile&&(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{onSubmit:H((function(t){e.setProfile(t,e.profile.userId),E(!1)}),(function(e){})),children:[(0,x.jsx)("button",{children:"Save"}),(0,x.jsx)("label",{children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"}),":",(0,x.jsxs)("div",{className:f.Z.formControl+" "+(Y.fullName&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("fullName",{value:e.profile.fullName,required:!0,maxLength:40})),{},{placeholder:"Full name"})),Y.fullName&&"required"===Y.fullName.type&&(0,x.jsx)("span",{children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),Y.fullName&&"maxLength"===Y.fullName.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsx)("label",{children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),":",(0,x.jsxs)("div",{className:f.Z.formControl+" "+(Y.aboutMe&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("aboutMe",{required:!0,maxLength:40})),{},{placeholder:"aboutMe"})),Y.aboutMe&&"required"===Y.aboutMe.type&&(0,x.jsx)("span",{children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),Y.aboutMe&&"maxLength"===Y.aboutMe.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl,children:[(0,x.jsx)("input",(0,o.Z)({type:"checkbox"},$("lookingForAJob",{required:!0}))),"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"]}),(0,x.jsx)("label",{children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438"}),":",(0,x.jsxs)("div",{className:f.Z.formControl+" "+(Y.lookingForAJobDescription&&f.Z.error),children:[(0,x.jsx)("textarea",(0,o.Z)((0,o.Z)({},$("lookingForAJobDescription",{required:!0,maxLength:40})),{},{placeholder:"My professional skills"})),Y.lookingForAJobDescription&&"required"===Y.lookingForAJobDescription.type&&(0,x.jsx)("span",{children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),Y.lookingForAJobDescription&&"maxLength"===Y.lookingForAJobDescription.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(t=Y.contacts)||void 0===t?void 0:t.facebook)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.facebook",{maxLength:40})),{},{placeholder:"Facebook"})),(null===(s=Y.contacts)||void 0===s?void 0:s.facebook)&&"maxLength"===Y.contacts.facebook.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(a=Y.contacts)||void 0===a?void 0:a.website)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.website",{maxLength:40})),{},{placeholder:"Web Site"})),(null===(r=Y.contacts)||void 0===r?void 0:r.website)&&"maxLength"===Y.contacts.website.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(n=Y.contacts)||void 0===n?void 0:n.vk)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.vk",{maxLength:40})),{},{placeholder:"vk"})),(null===(i=Y.contacts)||void 0===i?void 0:i.vk)&&"maxLength"===Y.contacts.vk.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(c=Y.contacts)||void 0===c?void 0:c.twitter)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.twitter",{maxLength:40})),{},{placeholder:"twitter"})),(null===(d=Y.contacts)||void 0===d?void 0:d.twitter)&&"maxLength"===Y.contacts.twitter.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(h=Y.contacts)||void 0===h?void 0:h.instagram)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.instagram",{maxLength:40})),{},{placeholder:"instagram"})),(null===(p=Y.contacts)||void 0===p?void 0:p.instagram)&&"maxLength"===Y.contacts.instagram.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(m=Y.contacts)||void 0===m?void 0:m.youtube)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.youtube",{maxLength:40})),{},{placeholder:"youtube"})),(null===(g=Y.contacts)||void 0===g?void 0:g.youtube)&&"maxLength"===Y.contacts.youtube.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(j=Y.contacts)||void 0===j?void 0:j.github)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.github",{maxLength:40})),{},{placeholder:"github"})),(null===(v=Y.contacts)||void 0===v?void 0:v.github)&&"maxLength"===Y.contacts.github.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,x.jsxs)("div",{className:f.Z.formControl+" "+((null===(b=Y.contacts)||void 0===b?void 0:b.mainLink)&&f.Z.error),children:[(0,x.jsx)("input",(0,o.Z)((0,o.Z)({},$("contacts.mainLink",{maxLength:40})),{},{placeholder:"mainLink"})),(null===(T=Y.contacts)||void 0===T?void 0:T.mainLink)&&"maxLength"===Y.contacts.mainLink.type&&(0,x.jsx)("span",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]})]})})]})]})]}):(0,x.jsx)(Z.Z,{})},A=function(e){return(0,l.useEffect)((function(){e.isAuth||e.match.params.userId||e.match.navigate("/login")}),[e.isAuth,e.match.params.userId]),(0,x.jsxs)("div",{children:[(0,x.jsx)(T,{profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC,uploadPhotoTC:e.uploadPhotoTC,setProfile:e.setProfile,isMyProfilePage:e.isMyProfilePage}),(0,x.jsx)(b,{})]})},q=(0,l.memo)(A),I=s(7689),D=s(7781),B=function(e){(0,n.Z)(s,e);var t=(0,i.Z)(s);function s(){return(0,a.Z)(this,s),t.apply(this,arguments)}return(0,r.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.id),this.props.getProfileTC(e),this.props.getStatusTC(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(q,(0,o.Z)((0,o.Z)({},this.props),{},{isMyProfilePage:!this.props.match.params.userId}))})}}]),s}(l.PureComponent),J=(0,D.qC)((0,v.$j)((function(e){return{profile:e.profilePage.profile,posts:e.profilePage.posts,id:e.auth.id,status:e.profilePage.status}}),{getProfileTC:c.GA,getStatusTC:c.GP,updateStatusTC:c.OG,uploadPhotoTC:c.Yc,setProfile:c.RG}),(function(e){return function(t){var s={params:(0,I.UO)(),location:(0,I.TH)(),navigate:(0,I.s0)()};return(0,x.jsx)(e,(0,o.Z)((0,o.Z)({},t),{},{match:s}))}}),(0,v.$j)((function(e){return{isAuth:e.auth.isAuth}})))(B)}}]);
//# sourceMappingURL=750.44636adb.chunk.js.map