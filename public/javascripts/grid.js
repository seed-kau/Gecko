const imgCollection = document.getElementsByClassName("img_perfume");
const currentCount = document.getElementById("currentCount");
const button = document.getElementById("button");
const textFirst = document.getElementById("textFirst");

const imgList = [].slice.call(imgCollection);
let flag = [];

// 이미지 클릭 시 이벤트 추가
imgList.forEach(element => {
  element.addEventListener("click", () => {
    if (flag.includes(element)) {
      element.style.border = "";
      flag.splice(flag.indexOf(element), 1);
    } else {
      flag.push(element);
      element.style.border = "4px red solid";
    }

    changeNum();
  });
});

// 버튼 클릭 시 확인하는 이벤트 추가
button.addEventListener("click", () => {
  if (flag.length < 3) {
    alert("사진의 개수가 부족합니다. 더 선택해주세요.");
  } else if (flag.length > 3) {
    alert("사진의 개수가 많습니다. 3개만 선택해주세요.");
  } else {
    location.href = "./Secpage.html";
  }
});

function changeNum() {
  currentCount.innerText = `현재 선택된 사진 수 ${flag.length}개입니다.`;
}