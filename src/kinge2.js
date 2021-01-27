// import React, { Component } from 'react';
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

// const URL = "./lunge_model/";
// let model, webcam, ctx, labelContainer, maxPredictions;

// var Kinge = React.createClass({

//     constructor() {
//         this.progress = 327;
//         this.status = "null";
//         this.count = 0;
//         this.startBtn = 0;
//         this.totalNum = 20;
//         this.subNum = 327 / this.totalNum;
//     },
//     startExercise() {
//         this.startBtn = 1;
//         window.$('#start').css('display', 'none');
//     },

//     onload() {
//         var inputNum = prompt("목표 갯수를 입력해주세요.(숫자만 입력하세요)", 20);
//         this.totalNum = Number(inputNum);
//         if (isNaN(this.totalNum)) {
//             alert('숫자가 아닙니다. 20개로 자동 설정 되었습니다.');
//             this.totalNum = 20;
//         } else if (this.totalNum == 0) {
//             alert('0개는 할 수 없습니다. 20개로 자동 설정 되었습니다.');
//             this.totalNum = 20;
//         }
//         this.subNum = 327 / this.totalNum
//     },

//     async init() {
//         const modelURL = URL + "model.json";
//         const metadataURL = URL + "metadata.json";

//         // load the model and metadata
//         // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
//         // Note: the pose library adds a tmPose object to your window (window.tmPose)
//         model = await tmPose.load(modelURL, metadataURL);
//         maxPredictions = model.getTotalClasses();

//         // Convenience function to setup a webcam
//         const size = 500;
//         const flip = true; // whether to flip the webcam
//         webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
//         await webcam.setup(); // request access to the webcam
//         await webcam.play();
//         window.requestAnimationFrame(loop);

//         // append/get elements to the DOM
//         const canvas = document.getElementById("canvas");
//         canvas.width = size; canvas.height = size;
//         ctx = canvas.getContext("2d");

//         window.$('#camera_on').css('display', 'none');
//         window.$('#start').css('display', 'inline');
//     },

//     async loop(timestamp) {
//         webcam.update(); // update the webcam frame
//         await predict();
//         window.requestAnimationFrame(loop);
//     },

//     async predict() {
//         // Prediction #1: run input through posenet
//         // estimatePose can take in an image, video or canvas html element
//         const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
//         // Prediction 2: run input through teachable machine classification model
//         const prediction = await model.predict(posenetOutput);



//         if (startBtn == 1) {
//             if (prediction[0].probability.toFixed(2) == 1.00) {
//                 if (status == "lunge") {
//                     count++
//                     progress = progress - subNum
//                     if (progress <= 0) {
//                         progress = 327 - subNum
//                     }
//                     window.$('.progress').css('stroke-dashoffset', progress);
//                     window.$('#counter').html(count);
//                     if (count == totalNum) {
//                         setTimeout(function () {
//                             alert('축하합니다! 런지 운동이 끝났습니다.');
//                             window.history.back();
//                         }, 100);
//                     }
//                 }
//                 status = "stand"
//             } else if (prediction[1].probability.toFixed(2) == 1.00) {
//                 status = "lunge"
//             } else if (prediction[2].probability.toFixed(2) == 1.00) {
//                 status = "notLunge"
//             }
//         }



//         for (let i = 0; i < maxPredictions; i++) {
//             var percent = prediction[i].probability.toFixed(2) * 100;
//             var str_percent = String(percent) + "%";
//             if (i === 0) {
//                 window.$('#stand').css('width', str_percent);
//                 document.getElementById('stand').innerHTML = String(percent) + "%";
//             } else if (i === 1) {
//                 window.$('#lunge').css('width', str_percent);
//                 document.getElementById('lunge').innerHTML = String(percent) + "%";
//             } else if (i === 2) {
//                 window.$('#notLunge').css('width', str_percent);
//                 document.getElementById('notLunge').innerHTML = String(percent) + "%";
//             }
//         }

//         // finally draw the poses
//         drawPose(pose);
//     },

//     drawPose: function(pose) {
//         if (webcam.canvas) {
//             ctx.drawImage(webcam.canvas, 0, 0);
//             // draw the keypoints and skeleton
//             if (pose) {
//                 const minPartConfidence = 0.5;
//                 tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
//                 tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
//             }
//         }
//     },

//     render: function() {
//       return (
//         <div>
//           <meta charSet="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" />
//           <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />

//           <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>


//           <link rel="stylesheet" href="bootstrap.min.css" />
//           <link rel="stylesheet" href="bootstrap-theme.min.css" />
//           <script src="bootstrap.min.js"></script>
//           <link rel="stylesheet" href="style.css" />
//           <title>Document</title>
//           <style dangerouslySetInnerHTML={{__html: "\n        #content {\n            font-family: 'Roboto Mono', monospace;\n        }\n\n        h1 {\n            font-size: 30px;\n        }\n\n        .progress {\n            margin-bottom: 10px;\n            margin-top: 10px;\n        }\n\n        .progress_name {\n            width: 150px;\n        }\n\n        .progress_gage {\n            width: 343px;\n        }\n    " }} />
//           <nav className="navber navbar-inverse">
//             <div className="container-fluid">
//               <div className="navbar-header">
//                 <a className="navbar-brand" href="../index.html" style={{color: 'white'}}>AI Health Trainer</a>
//               </div>
//               <div className="nav navbar-nav">
//                 <li><a href="../index.html">Home</a></li>
//                 <li className="dropdown">
//                   <a href="#" id="dropdownCategoryMenu" data-toggle="dropdown">
//                     <i className="fa fa-folder-open" />Exercise Menu<i className="caret" />
//                   </a>
//                   <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownCategoryMenu">
//                     <li><a href="./lunge.html"><i className="fa fa-folder" />Lunge</a></li>
//                     <li><a href="./pushup.html"><i className="fa fa-folder" />Push Up</a></li>
//                     <li><a href="./squat.html"><i className="fa fa-folder" />Squat</a></li>
//                     <li><a href="./situp.html"><i className="fa fa-folder" />Sit Up</a></li>
//                     <li><a href="./shoulderPress.html"><i className="fa fa-folder" />Shoulder Press</a></li>
//                     <li><a href="./legRaise.html"><i className="fa fa-folder" />Leg Raise</a></li>
//                   </ul>
//                 </li>
//               </div>
//             </div>
//           </nav>
//           <div id="content" className="container" style={{marginTop: '4em'}}>
//             <div className="row">
//               <div className="col-md-1" />
//               <div className="col-md-5" style={{textAlign: 'center'}}>
//                 <div className="row">
//                   <div className="col-md-3" />
//                   <div className="col-md-4">
//                     <h1>Lunge</h1>
//                   </div>
//                   <div className="col-md-4">
//                     <img src="../images/lunge_icon.png" height={100} alt="lunge" />
//                   </div>
//                   <div className="col-md-1" />
//                 </div>
//                 <button id="camera_on" type="button" className="btn btn-info" style={{margin: '10px', width: '200px', display: 'inline'}} onclick="init()">Camera On</button>
//                 <button id="start" type="button" className="btn btn-success" style={{margin: '10px', width: '200px', display: 'none'}} onclick="startExercise()">Start</button>
//                 <div><canvas id="canvas" /></div>
//                 <div id="label-container">
//                   <table style={{margin: 'auto', textAlign: 'center'}}>
//                     <tbody><tr>
//                         <td className="progress_name">
//                           <div>stand</div>
//                         </td>
//                         <td className="progress_gage">
//                           <div className="progress">
//                             <div className="progress-bar progress-bar-danger" id="stand" />
//                           </div>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="progress_name">
//                           <div>lunge</div>
//                         </td>
//                         <td className="progress_gage">
//                           <div className="progress">
//                             <div className="progress-bar progress-bar-info" id="lunge" />
//                           </div>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="progress_name">
//                           <div>not lunge</div>
//                         </td>
//                         <td className="progress_gage">
//                           <div className="progress">
//                             <div className="progress-bar progress-bar-success" id="notLunge" />
//                           </div>
//                         </td>
//                       </tr>
//                     </tbody></table>
//                 </div>
//               </div>
//               <div className="col-md-5" style={{marginTop: '150px'}}>
//                 <div className="frame">
//                   <div className="center">
//                     <div className="headline">
//                       <div className="small">LUNGE</div>Counter
//                     </div>
//                     <div className="circle-big">
//                       <div className="text">
//                         <span id="counter">0</span>
//                         <div className="small" style={{color: 'white'}}>개</div>
//                       </div>
//                       <svg>
//                         <circle className="bg" cx={57} cy={57} r={52} />
//                         <circle className="progress" cx={57} cy={57} r={52} />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-1" />
//             </div>
//           </div>

//         <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
//         <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js"></script>  
        
//         </div>        
//       );
//     }
//   });

//   export default Kinge;
