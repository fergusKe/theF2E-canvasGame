import React, { Component } from 'react';

let timer = 0;
const ww = window.innerWidth;
const wh = window.innerHeight;

class Home extends Component {
  state = {
    time: 0
  }

  componentDidMount() {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    this.setState({
      canvas,
      ctx
    }, () => {
      this.handleTimer();
    });
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  handleTimer = () => {
    const that = this;
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(() => {
      that.update();
    }, 1000);
  }

  update = () => {
    this.setState({
      time: this.state.time + 1
    });
  }

  render() {
    const canvas = document.getElementById("mycanvas");
    console.log('canvas = ', canvas);

    if (canvas) {
      console.log('canvas = ', canvas);
      const ctx = canvas.getContext("2d");
      const time = 0;
      const ship = {
        deg: 0
      };

      // init
      canvas.width = ww;
      canvas.height = wh;

      // draw
      ctx.fillStyle = "#001D2E";
      ctx.fillRect(0, 0, ww, wh);

      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      const gutter = 50;
      for (let i = 0; i * 10 < ww; i += 1) {
        ctx.moveTo(i * gutter, 0);
        ctx.lineTo(i * gutter, wh);
      }
      for (let i = 0; i * 10 < wh; i += 1) {
        ctx.moveTo(0, i * gutter);
        ctx.lineTo(ww, i * gutter);
      }
      ctx.stroke();

      ctx.restore();

      ctx.save();
      ctx.shadowBlur = 50;
      ctx.shadowColor = "white";

      ctx.translate(ww / 2, wh / 2);
      ctx.beginPath();
      ctx.arc(0, 0, 80, 0, Math.PI * 2);
      ctx.strokeStyle = "white";
      // ctx.fillStyle="white"
      ctx.lineWidth = 15;
      ctx.stroke();
      for (let i = 0; i < 3; i += 1) {
        ctx.rotate(Math.PI * 2 / 3);
        ctx.moveTo(0, 0);
        ctx.lineTo(80, 0);
      }

      ctx.lineWidth = 5;
      ctx.stroke();

      ctx.beginPath();
      if (time % 50 === 0) {
        TweenMax.to(ship, 0.5, {deg: time / 20});
        // ship.deg = time/20
      }
      ctx.arc(0, 0, 150, -Math.PI / 4 + ship.deg, Math.PI / 4 + ship.deg);
      ctx.stroke();

      ctx.save();
      ctx.rotate(ship.deg + Math.PI);
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.fillRect(100, -25, 50, 50);

      ctx.stroke();
      ctx.restore();

      ctx.restore();

      const r = 300;
      const deg = time / 60;
      ctx.save();
      ctx.translate(ww / 2, wh / 2);
      ctx.beginPath();
      ctx.arc(Math.cos(deg) * r, Math.sin(deg) * r, 40, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.restore();

      // requestAnimationFrame(draw)
    }

    return (
      <canvas id="mycanvas" />
    );
  }
}

export default Home;
