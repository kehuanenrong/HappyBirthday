let str = `
  <br>
  <br>
  听我说，天气凉的时候记得多穿衣服，记得多喝热水，
  <br>
  洗了头吹干再出去，运动完记得及时添衣，每天记得按时吃饭，对自己好一点啊，对了，
  <br>
  我想说，你笑起来真的很好看！
  <br>
  <br>
  `
let wenan = [
  `
  <br>
  祝你
  <br>
  时时有选择
  <br>
  路路有回转
  <br>
  `,

  `愿你的未来纯净明朗，像你此刻的可爱目光，
  <br><br>
  在世间美好的命运中，愿你的命运美好欢畅。<br><br>`,

  `<br>愿你一切尽意，百事从欢。<br>`,

  `<br>愿你执着于理想，纯粹于当下。<br>`
];



// let time1 = 20;
// const btn = document.querySelector('.my_btn');
// btn.addEventListener('click', function () {
//   // 渲染文字
//   myRender();
//   // 禁用按钮
//   btn.disabled = true;

//   //开启定时器
//   let timer = setInterval(function () {
//     if (time1 == 0) {
//       // 清楚定时器并且恢复按钮
//       clearInterval(timer);
//       btn.disabled = false;
//       btn.innerHTML = "Yes";
//     } else {
//       btn.innerHTML = `${time1}s`;
//       time1--;
//     }
//   }, 1000);
// })
document.body.addEventListener('click', myRender, { once: true });
function myRender() {
  // 获取名字
  const name = 'Hjx';
  // 名字固定文案

  if (true) {
    let lvstr1 = `
    能收下吗？
    <br>
    写着“易碎品，小心轻放”的
    <br>
    我的心
    <br>
    `
    let lvstr2 = `
    <br>
    我祝你万事胜意吧！
    <br>
    万事胜意的意思是，一切结果都比你当初想象的，好那么一点点。
    <br>
    Best wishes for you！
    <br>
    <br>
    <br>
    生日快乐 平安喜乐 🎂
    <br>
    <br>唯愿烟花像星辰 祝你所愿皆成真🧨
    <br>
    `
    // str = str + lvstr1 + lvstr2;
    str = str + lvstr2;
  }
  let ran = Math.floor(Math.random() * 4);//随机数
  let ss = wenan[ran];//随机文案
  str = ss + str;
  str = `${name}：<br>` + str;
  console.log(`${name}`);
  myText();
}

function myText() {
  // let str = $("#text").html(); //"于我而言，你是最好且是唯一"
  let str_ = ''
  let i = 0
  let content = document.getElementById('contents')
  let timer = setInterval(() => {
    if (str_.length < str.length) {
      str_ += str[i++]
      content.innerHTML = '<p>' + str_ + '<span class="xx" style="opacity: 1;    color: white;">∎</span></p>' //打印时加光标
    } else {
      clearInterval(timer)
      content.innerHTML = '<p>' + str_ + '</p>'
    }
  }, 100)
}
