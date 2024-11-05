"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[7171],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var toPropertyKey=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,toPropertyKey.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey})},"./node_modules/qrcode.react/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>QRCode});var qrcodegen,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&0>exclude.indexOf(prop)&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))0>exclude.indexOf(prop)&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};(qrcodegen2=>{let _QrCode=class{constructor(version,errorCorrectionLevel,dataCodewords,msk){if(this.version=version,this.errorCorrectionLevel=errorCorrectionLevel,this.modules=[],this.isFunction=[],version<_QrCode.MIN_VERSION||version>_QrCode.MAX_VERSION)throw RangeError("Version value out of range");if(msk<-1||msk>7)throw RangeError("Mask value out of range");this.size=4*version+17;let row=[];for(let i=0;i<this.size;i++)row.push(!1);for(let i=0;i<this.size;i++)this.modules.push(row.slice()),this.isFunction.push(row.slice());this.drawFunctionPatterns();let allCodewords=this.addEccAndInterleave(dataCodewords);if(this.drawCodewords(allCodewords),-1==msk){let minPenalty=1e9;for(let i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);let penalty=this.getPenaltyScore();penalty<minPenalty&&(msk=i,minPenalty=penalty),this.applyMask(i)}}assert(0<=msk&&msk<=7),this.mask=msk,this.applyMask(msk),this.drawFormatBits(msk),this.isFunction=[]}static encodeText(text,ecl){let segs=qrcodegen2.QrSegment.makeSegments(text);return _QrCode.encodeSegments(segs,ecl)}static encodeBinary(data,ecl){let seg=qrcodegen2.QrSegment.makeBytes(data);return _QrCode.encodeSegments([seg],ecl)}static encodeSegments(segs,ecl,minVersion=1,maxVersion=40,mask=-1,boostEcl=!0){let version,dataUsedBits;if(!(_QrCode.MIN_VERSION<=minVersion&&minVersion<=maxVersion&&maxVersion<=_QrCode.MAX_VERSION)||mask<-1||mask>7)throw RangeError("Invalid value");for(version=minVersion;;version++){let dataCapacityBits2=8*_QrCode.getNumDataCodewords(version,ecl),usedBits=QrSegment.getTotalBits(segs,version);if(usedBits<=dataCapacityBits2){dataUsedBits=usedBits;break}if(version>=maxVersion)throw RangeError("Data too long")}for(let newEcl of[_QrCode.Ecc.MEDIUM,_QrCode.Ecc.QUARTILE,_QrCode.Ecc.HIGH])boostEcl&&dataUsedBits<=8*_QrCode.getNumDataCodewords(version,newEcl)&&(ecl=newEcl);let bb=[];for(let seg of segs)for(let b of(appendBits(seg.mode.modeBits,4,bb),appendBits(seg.numChars,seg.mode.numCharCountBits(version),bb),seg.getData()))bb.push(b);assert(bb.length==dataUsedBits);let dataCapacityBits=8*_QrCode.getNumDataCodewords(version,ecl);assert(bb.length<=dataCapacityBits),appendBits(0,Math.min(4,dataCapacityBits-bb.length),bb),appendBits(0,(8-bb.length%8)%8,bb),assert(bb.length%8==0);for(let padByte=236;bb.length<dataCapacityBits;padByte^=253)appendBits(padByte,8,bb);let dataCodewords=[];for(;8*dataCodewords.length<bb.length;)dataCodewords.push(0);return bb.forEach((b,i)=>dataCodewords[i>>>3]|=b<<7-(7&i)),new _QrCode(version,ecl,dataCodewords,mask)}getModule(x,y){return 0<=x&&x<this.size&&0<=y&&y<this.size&&this.modules[y][x]}getModules(){return this.modules}drawFunctionPatterns(){for(let i=0;i<this.size;i++)this.setFunctionModule(6,i,i%2==0),this.setFunctionModule(i,6,i%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let alignPatPos=this.getAlignmentPatternPositions(),numAlign=alignPatPos.length;for(let i=0;i<numAlign;i++)for(let j=0;j<numAlign;j++)0==i&&0==j||0==i&&j==numAlign-1||i==numAlign-1&&0==j||this.drawAlignmentPattern(alignPatPos[i],alignPatPos[j]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(mask){let data=this.errorCorrectionLevel.formatBits<<3|mask,rem=data;for(let i=0;i<10;i++)rem=rem<<1^(rem>>>9)*1335;let bits=(data<<10|rem)^21522;assert(bits>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,getBit(bits,i));this.setFunctionModule(8,7,getBit(bits,6)),this.setFunctionModule(8,8,getBit(bits,7)),this.setFunctionModule(7,8,getBit(bits,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,getBit(bits,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,getBit(bits,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,getBit(bits,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let rem=this.version;for(let i=0;i<12;i++)rem=rem<<1^(rem>>>11)*7973;let bits=this.version<<12|rem;assert(bits>>>18==0);for(let i=0;i<18;i++){let color=getBit(bits,i),a=this.size-11+i%3,b=Math.floor(i/3);this.setFunctionModule(a,b,color),this.setFunctionModule(b,a,color)}}drawFinderPattern(x,y){for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){let dist=Math.max(Math.abs(dx),Math.abs(dy)),xx=x+dx,yy=y+dy;0<=xx&&xx<this.size&&0<=yy&&yy<this.size&&this.setFunctionModule(xx,yy,2!=dist&&4!=dist)}}drawAlignmentPattern(x,y){for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)this.setFunctionModule(x+dx,y+dy,1!=Math.max(Math.abs(dx),Math.abs(dy)))}setFunctionModule(x,y,isDark){this.modules[y][x]=isDark,this.isFunction[y][x]=!0}addEccAndInterleave(data){let ver=this.version,ecl=this.errorCorrectionLevel;if(data.length!=_QrCode.getNumDataCodewords(ver,ecl))throw RangeError("Invalid argument");let numBlocks=_QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver],blockEccLen=_QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver],rawCodewords=Math.floor(_QrCode.getNumRawDataModules(ver)/8),numShortBlocks=numBlocks-rawCodewords%numBlocks,shortBlockLen=Math.floor(rawCodewords/numBlocks),blocks=[],rsDiv=_QrCode.reedSolomonComputeDivisor(blockEccLen);for(let i=0,k=0;i<numBlocks;i++){let dat=data.slice(k,k+shortBlockLen-blockEccLen+(i<numShortBlocks?0:1));k+=dat.length;let ecc=_QrCode.reedSolomonComputeRemainder(dat,rsDiv);i<numShortBlocks&&dat.push(0),blocks.push(dat.concat(ecc))}let result=[];for(let i=0;i<blocks[0].length;i++)blocks.forEach((block,j)=>{(i!=shortBlockLen-blockEccLen||j>=numShortBlocks)&&result.push(block[i])});return assert(result.length==rawCodewords),result}drawCodewords(data){if(data.length!=Math.floor(_QrCode.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let i=0;for(let right=this.size-1;right>=1;right-=2){6==right&&(right=5);for(let vert=0;vert<this.size;vert++)for(let j=0;j<2;j++){let x=right-j,y=(right+1&2)==0?this.size-1-vert:vert;!this.isFunction[y][x]&&i<8*data.length&&(this.modules[y][x]=getBit(data[i>>>3],7-(7&i)),i++)}}assert(i==8*data.length)}applyMask(mask){if(mask<0||mask>7)throw RangeError("Mask value out of range");for(let y=0;y<this.size;y++)for(let x=0;x<this.size;x++){let invert;switch(mask){case 0:invert=(x+y)%2==0;break;case 1:invert=y%2==0;break;case 2:invert=x%3==0;break;case 3:invert=(x+y)%3==0;break;case 4:invert=(Math.floor(x/3)+Math.floor(y/2))%2==0;break;case 5:invert=x*y%2+x*y%3==0;break;case 6:invert=(x*y%2+x*y%3)%2==0;break;case 7:invert=((x+y)%2+x*y%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[y][x]&&invert&&(this.modules[y][x]=!this.modules[y][x])}}getPenaltyScore(){let result=0;for(let y=0;y<this.size;y++){let runColor=!1,runX=0,runHistory=[0,0,0,0,0,0,0];for(let x=0;x<this.size;x++)this.modules[y][x]==runColor?5==++runX?result+=_QrCode.PENALTY_N1:runX>5&&result++:(this.finderPenaltyAddHistory(runX,runHistory),runColor||(result+=this.finderPenaltyCountPatterns(runHistory)*_QrCode.PENALTY_N3),runColor=this.modules[y][x],runX=1);result+=this.finderPenaltyTerminateAndCount(runColor,runX,runHistory)*_QrCode.PENALTY_N3}for(let x=0;x<this.size;x++){let runColor=!1,runY=0,runHistory=[0,0,0,0,0,0,0];for(let y=0;y<this.size;y++)this.modules[y][x]==runColor?5==++runY?result+=_QrCode.PENALTY_N1:runY>5&&result++:(this.finderPenaltyAddHistory(runY,runHistory),runColor||(result+=this.finderPenaltyCountPatterns(runHistory)*_QrCode.PENALTY_N3),runColor=this.modules[y][x],runY=1);result+=this.finderPenaltyTerminateAndCount(runColor,runY,runHistory)*_QrCode.PENALTY_N3}for(let y=0;y<this.size-1;y++)for(let x=0;x<this.size-1;x++){let color=this.modules[y][x];color==this.modules[y][x+1]&&color==this.modules[y+1][x]&&color==this.modules[y+1][x+1]&&(result+=_QrCode.PENALTY_N2)}let dark=0;for(let row of this.modules)dark=row.reduce((sum,color)=>sum+(color?1:0),dark);let total=this.size*this.size,k=Math.ceil(Math.abs(20*dark-10*total)/total)-1;return assert(0<=k&&k<=9),assert(0<=(result+=k*_QrCode.PENALTY_N4)&&result<=2568888),result}getAlignmentPatternPositions(){if(1==this.version)return[];{let numAlign=Math.floor(this.version/7)+2,step=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*numAlign-2)),result=[6];for(let pos=this.size-7;result.length<numAlign;pos-=step)result.splice(1,0,pos);return result}}static getNumRawDataModules(ver){if(ver<_QrCode.MIN_VERSION||ver>_QrCode.MAX_VERSION)throw RangeError("Version number out of range");let result=(16*ver+128)*ver+64;if(ver>=2){let numAlign=Math.floor(ver/7)+2;result-=(25*numAlign-10)*numAlign-55,ver>=7&&(result-=36)}return assert(208<=result&&result<=29648),result}static getNumDataCodewords(ver,ecl){return Math.floor(_QrCode.getNumRawDataModules(ver)/8)-_QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver]*_QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver]}static reedSolomonComputeDivisor(degree){if(degree<1||degree>255)throw RangeError("Degree out of range");let result=[];for(let i=0;i<degree-1;i++)result.push(0);result.push(1);let root=1;for(let i=0;i<degree;i++){for(let j=0;j<result.length;j++)result[j]=_QrCode.reedSolomonMultiply(result[j],root),j+1<result.length&&(result[j]^=result[j+1]);root=_QrCode.reedSolomonMultiply(root,2)}return result}static reedSolomonComputeRemainder(data,divisor){let result=divisor.map(_=>0);for(let b of data){let factor=b^result.shift();result.push(0),divisor.forEach((coef,i)=>result[i]^=_QrCode.reedSolomonMultiply(coef,factor))}return result}static reedSolomonMultiply(x,y){if(x>>>8!=0||y>>>8!=0)throw RangeError("Byte out of range");let z=0;for(let i=7;i>=0;i--)z=z<<1^(z>>>7)*285^(y>>>i&1)*x;return assert(z>>>8==0),z}finderPenaltyCountPatterns(runHistory){let n=runHistory[1];assert(n<=3*this.size);let core=n>0&&runHistory[2]==n&&runHistory[3]==3*n&&runHistory[4]==n&&runHistory[5]==n;return(core&&runHistory[0]>=4*n&&runHistory[6]>=n?1:0)+(core&&runHistory[6]>=4*n&&runHistory[0]>=n?1:0)}finderPenaltyTerminateAndCount(currentRunColor,currentRunLength,runHistory){return currentRunColor&&(this.finderPenaltyAddHistory(currentRunLength,runHistory),currentRunLength=0),currentRunLength+=this.size,this.finderPenaltyAddHistory(currentRunLength,runHistory),this.finderPenaltyCountPatterns(runHistory)}finderPenaltyAddHistory(currentRunLength,runHistory){0==runHistory[0]&&(currentRunLength+=this.size),runHistory.pop(),runHistory.unshift(currentRunLength)}};function appendBits(val,len,bb){if(len<0||len>31||val>>>len!=0)throw RangeError("Value out of range");for(let i=len-1;i>=0;i--)bb.push(val>>>i&1)}function getBit(x,i){return(x>>>i&1)!=0}function assert(cond){if(!cond)throw Error("Assertion error")}_QrCode.MIN_VERSION=1,_QrCode.MAX_VERSION=40,_QrCode.PENALTY_N1=3,_QrCode.PENALTY_N2=3,_QrCode.PENALTY_N3=40,_QrCode.PENALTY_N4=10,_QrCode.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],_QrCode.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],qrcodegen2.QrCode=_QrCode;let _QrSegment=class{constructor(mode,numChars,bitData){if(this.mode=mode,this.numChars=numChars,this.bitData=bitData,numChars<0)throw RangeError("Invalid argument");this.bitData=bitData.slice()}static makeBytes(data){let bb=[];for(let b of data)appendBits(b,8,bb);return new _QrSegment(_QrSegment.Mode.BYTE,data.length,bb)}static makeNumeric(digits){if(!_QrSegment.isNumeric(digits))throw RangeError("String contains non-numeric characters");let bb=[];for(let i=0;i<digits.length;){let n=Math.min(digits.length-i,3);appendBits(parseInt(digits.substr(i,n),10),3*n+1,bb),i+=n}return new _QrSegment(_QrSegment.Mode.NUMERIC,digits.length,bb)}static makeAlphanumeric(text){let i;if(!_QrSegment.isAlphanumeric(text))throw RangeError("String contains unencodable characters in alphanumeric mode");let bb=[];for(i=0;i+2<=text.length;i+=2){let temp=45*_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i));appendBits(temp+=_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i+1)),11,bb)}return i<text.length&&appendBits(_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)),6,bb),new _QrSegment(_QrSegment.Mode.ALPHANUMERIC,text.length,bb)}static makeSegments(text){return""==text?[]:_QrSegment.isNumeric(text)?[_QrSegment.makeNumeric(text)]:_QrSegment.isAlphanumeric(text)?[_QrSegment.makeAlphanumeric(text)]:[_QrSegment.makeBytes(_QrSegment.toUtf8ByteArray(text))]}static makeEci(assignVal){let bb=[];if(assignVal<0)throw RangeError("ECI assignment value out of range");if(assignVal<128)appendBits(assignVal,8,bb);else if(assignVal<16384)appendBits(2,2,bb),appendBits(assignVal,14,bb);else if(assignVal<1e6)appendBits(6,3,bb),appendBits(assignVal,21,bb);else throw RangeError("ECI assignment value out of range");return new _QrSegment(_QrSegment.Mode.ECI,0,bb)}static isNumeric(text){return _QrSegment.NUMERIC_REGEX.test(text)}static isAlphanumeric(text){return _QrSegment.ALPHANUMERIC_REGEX.test(text)}getData(){return this.bitData.slice()}static getTotalBits(segs,version){let result=0;for(let seg of segs){let ccbits=seg.mode.numCharCountBits(version);if(seg.numChars>=1<<ccbits)return 1/0;result+=4+ccbits+seg.bitData.length}return result}static toUtf8ByteArray(str){str=encodeURI(str);let result=[];for(let i=0;i<str.length;i++)"%"!=str.charAt(i)?result.push(str.charCodeAt(i)):(result.push(parseInt(str.substr(i+1,2),16)),i+=2);return result}},QrSegment=_QrSegment;QrSegment.NUMERIC_REGEX=/^[0-9]*$/,QrSegment.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,QrSegment.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",qrcodegen2.QrSegment=QrSegment})(qrcodegen||(qrcodegen={})),(qrcodegen2=>{(QrCode2=>{let _Ecc=class{constructor(ordinal,formatBits){this.ordinal=ordinal,this.formatBits=formatBits}};_Ecc.LOW=new _Ecc(0,1),_Ecc.MEDIUM=new _Ecc(1,0),_Ecc.QUARTILE=new _Ecc(2,3),_Ecc.HIGH=new _Ecc(3,2),QrCode2.Ecc=_Ecc})(qrcodegen2.QrCode||(qrcodegen2.QrCode={}))})(qrcodegen||(qrcodegen={})),(qrcodegen2=>{(QrSegment2=>{let _Mode=class{constructor(modeBits,numBitsCharCount){this.modeBits=modeBits,this.numBitsCharCount=numBitsCharCount}numCharCountBits(ver){return this.numBitsCharCount[Math.floor((ver+7)/17)]}};_Mode.NUMERIC=new _Mode(1,[10,12,14]),_Mode.ALPHANUMERIC=new _Mode(2,[9,11,13]),_Mode.BYTE=new _Mode(4,[8,16,16]),_Mode.KANJI=new _Mode(8,[8,10,12]),_Mode.ECI=new _Mode(7,[0,0,0]),QrSegment2.Mode=_Mode})(qrcodegen2.QrSegment||(qrcodegen2.QrSegment={}))})(qrcodegen||(qrcodegen={}));var qrcodegen_default=qrcodegen,ERROR_LEVEL_MAP={L:qrcodegen_default.QrCode.Ecc.LOW,M:qrcodegen_default.QrCode.Ecc.MEDIUM,Q:qrcodegen_default.QrCode.Ecc.QUARTILE,H:qrcodegen_default.QrCode.Ecc.HIGH},DEFAULT_BGCOLOR="#FFFFFF",DEFAULT_FGCOLOR="#000000";function generatePath(modules,margin=0){let ops=[];return modules.forEach(function(row,y){let start=null;row.forEach(function(cell,x){if(!cell&&null!==start){ops.push(`M${start+margin} ${y+margin}h${x-start}v1H${start+margin}z`),start=null;return}if(x===row.length-1){if(!cell)return;null===start?ops.push(`M${x+margin},${y+margin} h1v1H${x+margin}z`):ops.push(`M${start+margin},${y+margin} h${x+1-start}v1H${start+margin}z`);return}cell&&null===start&&(start=x)})}),ops.join("")}function excavateModules(modules,excavation){return modules.slice().map((row,y)=>y<excavation.y||y>=excavation.y+excavation.h?row:row.map((cell,x)=>(x<excavation.x||x>=excavation.x+excavation.w)&&cell))}function getImageSettings(cells,size,includeMargin,imageSettings){if(null==imageSettings)return null;let numCells=cells.length+2*(includeMargin?4:0),defaultSize=Math.floor(.1*size),scale=numCells/size,w=(imageSettings.width||defaultSize)*scale,h=(imageSettings.height||defaultSize)*scale,x=null==imageSettings.x?cells.length/2-w/2:imageSettings.x*scale,y=null==imageSettings.y?cells.length/2-h/2:imageSettings.y*scale,excavation=null;if(imageSettings.excavate){let floorX=Math.floor(x),floorY=Math.floor(y),ceilW=Math.ceil(w+x-floorX),ceilH=Math.ceil(h+y-floorY);excavation={x:floorX,y:floorY,w:ceilW,h:ceilH}}return{x,y,h,w,excavation}}var SUPPORTS_PATH2D=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();function QRCodeCanvas(props){let{value,size=128,level="L",bgColor=DEFAULT_BGCOLOR,fgColor=DEFAULT_FGCOLOR,includeMargin=!1,style,imageSettings}=props,otherProps=__objRest(props,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),imgSrc=null==imageSettings?void 0:imageSettings.src,_canvas=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_image=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isImgLoaded,setIsImageLoaded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(null!=_canvas.current){let canvas=_canvas.current,ctx=canvas.getContext("2d");if(!ctx)return;let cells=qrcodegen_default.QrCode.encodeText(value,ERROR_LEVEL_MAP[level]).getModules(),margin=includeMargin?4:0,numCells=cells.length+2*margin,calculatedImageSettings=getImageSettings(cells,size,includeMargin,imageSettings),image=_image.current,haveImageToRender=null!=calculatedImageSettings&&null!==image&&image.complete&&0!==image.naturalHeight&&0!==image.naturalWidth;haveImageToRender&&null!=calculatedImageSettings.excavation&&(cells=excavateModules(cells,calculatedImageSettings.excavation));let pixelRatio=window.devicePixelRatio||1;canvas.height=canvas.width=size*pixelRatio;let scale=size/numCells*pixelRatio;ctx.scale(scale,scale),ctx.fillStyle=bgColor,ctx.fillRect(0,0,numCells,numCells),ctx.fillStyle=fgColor,SUPPORTS_PATH2D?ctx.fill(new Path2D(generatePath(cells,margin))):cells.forEach(function(row,rdx){row.forEach(function(cell,cdx){cell&&ctx.fillRect(cdx+margin,rdx+margin,1,1)})}),haveImageToRender&&ctx.drawImage(image,calculatedImageSettings.x+margin,calculatedImageSettings.y+margin,calculatedImageSettings.w,calculatedImageSettings.h)}}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsImageLoaded(!1)},[imgSrc]);let canvasStyle=__spreadValues({height:size,width:size},style),img=null;return null!=imgSrc&&(img=/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:imgSrc,key:imgSrc,style:{display:"none"},onLoad:()=>{setIsImageLoaded(!0)},ref:_image})),/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas",__spreadValues({style:canvasStyle,height:size,width:size,ref:_canvas},otherProps)),img)}function QRCodeSVG(props){let{value,size=128,level="L",bgColor=DEFAULT_BGCOLOR,fgColor=DEFAULT_FGCOLOR,includeMargin=!1,imageSettings}=props,otherProps=__objRest(props,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),cells=qrcodegen_default.QrCode.encodeText(value,ERROR_LEVEL_MAP[level]).getModules(),margin=includeMargin?4:0,numCells=cells.length+2*margin,calculatedImageSettings=getImageSettings(cells,size,includeMargin,imageSettings),image=null;null!=imageSettings&&null!=calculatedImageSettings&&(null!=calculatedImageSettings.excavation&&(cells=excavateModules(cells,calculatedImageSettings.excavation)),image=/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement("image",{xlinkHref:imageSettings.src,height:calculatedImageSettings.h,width:calculatedImageSettings.w,x:calculatedImageSettings.x+margin,y:calculatedImageSettings.y+margin,preserveAspectRatio:"none"}));let fgPath=generatePath(cells,margin);return /* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__spreadValues({height:size,width:size,viewBox:`0 0 ${numCells} ${numCells}`},otherProps),/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:bgColor,d:`M0,0 h${numCells}v${numCells}H0z`,shapeRendering:"crispEdges"}),/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:fgColor,d:fgPath,shapeRendering:"crispEdges"}),image)}var QRCode=props=>{let{renderAs}=props,otherProps=__objRest(props,["renderAs"]);return"svg"===renderAs?/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement(QRCodeSVG,__spreadValues({},otherProps)):/* @__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createElement(QRCodeCanvas,__spreadValues({},otherProps))}}}]);