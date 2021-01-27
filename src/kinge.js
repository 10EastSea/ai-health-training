import React, { Component } from 'react';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

const URL = "./lunge_model/";
let model, webcam, ctx, labelContainer, maxPredictions;

var Kinge = React.createClass({

    constructor() {
            this.progress = 327;
            this.status = "null";
            this.count = 0;
            this.startBtn = 0;
    },

    onload: function() {
        window.$('#myModal').on('show.bs.modal', function (event) { // myModal 윈도우가 오픈할때 아래의 옵션을 적용
            var button = window.$(event.relatedTarget) // 모달 윈도우를 오픈하는 버튼
            var titleTxt = button.data('title') // 버튼에서 data-title 값을 titleTxt 변수에 저장
            var modal = window.$(this)
            modal.find('.modal-title').text('Title : ' + titleTxt) // 모달위도우에서 .modal-title을 찾아 titleTxt 값을 치환
        })
    },

    init: async function() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a tmPose object to your window (window.tmPose)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 500;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");

        $('#camera_on').css('display', 'none');
        $('#start').css('display', 'inline');
    },

    loop: async function(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.request,AnimationFrame(loop);
    },

    startExercise() {
        this.startBtn = 1;
        $('#start').css('display', 'none');
    },

    async predict() {
        // Prediction #1: run input through posenet
        // estimatePose can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);



        if (startBtn == 1) {
            if (prediction[0].probability.toFixed(2) > 0.95) {
                if (this.status == "lunge") {
                    this.count++
                    this.progress = this.progress - 32.7
                    if (this.progress <= 0) {
                        this.progress = 327 - 32.7
                    }
                    $('.progress').css('stroke-dashoffset', this.progress);
                    $('#counter').html(this.count);
                    if (this.count == totalNum) {
                        setTimeout(function () {
                            alert('축하합니다! 런지 운동이 끝났습니다.');
                            window.history.back();
                        }, 10);
                    }
                }
                this.status = "stand"
            } else if (prediction[1].probability.toFixed(2) == 1.00) {
                this.status = "lunge"
            } else if (prediction[2].probability.toFixed(2) == 1.00) {
                this.status = "notLunge"
            }
        }



        for (let i = 0; i < maxPredictions; i++) {
            var percent = prediction[i].probability.toFixed(2) * 100;
            var str_percent = String(percent) + "%";
            if (i === 0) {
                $('#stand').css('width', str_percent);
                document.getElementById('stand').innerHTML = String(percent) + "%";
            } else if (i === 1) {
                $('#lunge').css('width', str_percent);
                document.getElementById('lunge').innerHTML = String(percent) + "%";
            } else if (i === 2) {
                $('#notLunge').css('width', str_percent);
                document.getElementById('notLunge').innerHTML = String(percent) + "%";
            }
        }

        // finally draw the poses
        drawPose(pose);
    },

    drawPose: function(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    },

    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
          <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <link rel="stylesheet" href="bootstrap.min.css" />
          <link rel="stylesheet" href="bootstrap-theme.min.css" />
          <script src="bootstrap.min.js"></script>

          <link rel="stylesheet" href="style.css" />
          <title>Document</title>
          <style dangerouslySetInnerHTML={{__html: "\n        #content {\n            font-family: 'Roboto Mono', monospace;\n        }\n\n        h1 {\n            font-size: 30px;\n        }\n\n        .progress {\n            margin-bottom: 10px;\n            margin-top: 10px;\n        }\n\n        .progress_name {\n            width: 150px;\n        }\n\n        .progress_gage {\n            width: 343px;\n        }\n    " }} />
          <nav className="navber navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="../index.html" style={{color: 'white'}}>AI Health Trainer</a>
              </div>
              <div className="nav navbar-nav">
                <li><a href="../index.html">Home</a></li>
                <li className="dropdown">
                  <a href="#" id="dropdownCategoryMenu" data-toggle="dropdown">
                    <i className="fa fa-folder-open" />Exercise Menu<i className="caret" />
                  </a>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownCategoryMenu">
                    <li><a href="./lunge.html"><i className="fa fa-folder" />Lunge</a></li>
                    <li><a href="./pushup.html"><i className="fa fa-folder" />Push Up</a></li>
                    <li><a href="./squat.html"><i className="fa fa-folder" />Squat</a></li>
                    <li><a href="./situp.html"><i className="fa fa-folder" />Sit Up</a></li>
                    <li><a href="./shoulderPress.html"><i className="fa fa-folder" />Shoulder Press</a></li>
                    <li><a href="./legRaise.html"><i className="fa fa-folder" />Leg Raise</a></li>
                  </ul>
                </li>
              </div>
            </div>
          </nav>
          <div id="content" className="container" style={{marginTop: '4em'}}>
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-5" style={{textAlign: 'center'}}>
                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-md-4">
                    <h1>Lunge</h1>
                  </div>
                  <div className="col-md-4">
                    <img src="../images/lunge_icon.png" height={100} alt="lunge" />
                  </div>
                  <div className="col-md-1" />
                </div>
                <button id="camera_on" type="button" className="btn btn-info" style={{margin: '10px', width: '200px', display: 'inline'}} onclick="init()">Camera On</button>
                <button id="start" type="button" className="btn btn-success" style={{margin: '10px', width: '200px', display: 'none'}} onclick="startExercise()">Start</button>
                <div><canvas id="canvas" /></div>
                <div id="label-container">
                  <table style={{margin: 'auto', textAlign: 'center'}}>
                    <tbody><tr>
                        <td className="progress_name">
                          <div>stand</div>
                        </td>
                        <td className="progress_gage">
                          <div className="progress">
                            <div className="progress-bar progress-bar-danger" id="stand" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="progress_name">
                          <div>lunge</div>
                        </td>
                        <td className="progress_gage">
                          <div className="progress">
                            <div className="progress-bar progress-bar-info" id="lunge" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="progress_name">
                          <div>not lunge</div>
                        </td>
                        <td className="progress_gage">
                          <div className="progress">
                            <div className="progress-bar progress-bar-success" id="notLunge" />
                          </div>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="col-md-5" style={{marginTop: '150px'}}>
                <div className="frame">
                  <div className="center">
                    <div className="headline">
                      <div className="small">LUNGE</div>Counter
                    </div>
                    <div className="circle-big">
                      <div className="text">
                        <span id="counter">0</span>
                        <div className="small" style={{color: 'white'}}>개</div>
                      </div>
                      <svg>
                        <circle className="bg" cx={57} cy={57} r={52} />
                        <circle className="progress" cx={57} cy={57} r={52} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
          {/* Modal window */}
          <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div className="modal-body">
                  Modal body
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      );
    }
  });

  export default Kinge;
