const a: number = 4
const b: number = 3
const c: number = 4

function checaTriangulo(a:number, b:number, c:number): string{
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(a, b, c))