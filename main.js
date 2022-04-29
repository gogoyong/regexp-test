let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick the fox lazy dog. hxyp
abbcccdddd
http://local
동해물과_ 백두산이
`


console.log(
  str.match(/(?<=@).{1,}/g)
  )