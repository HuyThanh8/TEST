function numberOneTriangle() {
  const n = Number(prompt("Nhập n", 1))

  for (let i = 0; i < n; i++) {

    for (let j = 0; j <= i; j++) {
      document.write("*");
    }
    document.write("<br/>")
  }

}
numberOneTriangle()