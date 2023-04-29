function genObj() {
  let yt_link = document.getElementById('yt_lnk')
  let tw_link = document.getElementById('tw_lnk')
  let tktk_link = document.getElementById('tktk_lnk')
  let ins_link = document.getElementById('ins_lnk')
  let kck_link = document.getElementById('kck_lnk')
  let tch_link = document.getElementById('tch_lnk')


  console.log(yt_link.value)
  console.log(tw_link.value)
  console.log(tktk_link.value)
  console.log(ins_link.value)
  console.log(kck_link.value)
  console.log(tch_link.value)

  let myObj = {
    yt_link: yt_link?.value,
    tw_link: tw_link?.value,
    tktk_link: tktk_link?.value,
    ins_link: ins_link?.value,
    kck_link: kck_link?.value,
    tch_link: tch_link?.value,
  }

  let genUrl = document.getElementById('generated_link')
  genUrl.innerHTML = JSON.stringify(myObj)
}
function generateLinks() {
  try {
    let myObj = JSON.parse(
      document.getElementById("obj").value ||
      alert("Please paste the object") ||
      "{}"
    );
    console.log(myObj);
    const regex = /twitter\.com\/(\w+)/;

    // Extract the username using the regular expression
    const match = myObj.tw_link.match(regex);
    const username = match[1];

    const lnksObj = {
      yt_link: myObj.yt_link + "?sub_confirmation=1",
      tw_link: "https://twitter.com/intent/user?screen_name=" + username,
      tktk_link: myObj.tktk_link,
      ins_link: myObj.ins_link,
      kck_link: myObj.kck_link,
      tch_link: myObj.tch_link,
    };

    for (let i of Object.keys(lnksObj)) {
      let el = document.getElementById(i);
      el.style.display = "none";
      if (myObj[i]) {
        el["href"] = lnksObj[i];
        el.style.display = "block";
        console.log(i);
      }
    }
  } catch (error) {
    alert(error);
  }
}
