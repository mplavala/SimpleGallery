!function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.rteForm=e({compiler:[6,">= 2.0.0-beta.1"],main:function(e,a,n,t){var l,r,i="function",s=a.helperMissing,d=this.escapeExpression,m=this.lambda;return'<div id="rteForm">\r\n    <div style="width:600px;">\r\n        <textarea id="rteField" style="width:99%;height:400px;">'+d((r=null!=(r=a.textarea||(null!=e?e.textarea:e))?r:s,typeof r===i?r.call(e,{name:"textarea",hash:{},data:t}):r))+'</textarea>\r\n    </div>\r\n    <div style="clear:both;padding:10px;float:right;">\r\n        <div id="rteSave" class="btn btn-right">\r\n            <div class="btn-text">\r\n                <img src="'+d((r=null!=(r=a.modxTheme||(null!=e?e.modxTheme:e))?r:s,typeof r===i?r.call(e,{name:"modxTheme",hash:{},data:t}):r))+'/images/icons/save.png">\r\n                '+d(m(null!=(l=null!=e?e.sgLang:e)?l.save:l,e))+'\r\n            </div>\r\n        </div>\r\n        <div id="rteCancel" class="btn btn-right">\r\n            <div class="btn-text">\r\n                <img src="'+d((r=null!=(r=a.modxTheme||(null!=e?e.modxTheme:e))?r:s,typeof r===i?r.call(e,{name:"modxTheme",hash:{},data:t}):r))+'/images/icons/stop.png">\r\n                '+d(m(null!=(l=null!=e?e.sgLang:e)?l.cancel:l,e))+"\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},useData:!0})}();