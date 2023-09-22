
export const useDate = (value: Date) => {
    if(value && value !== undefined) {
    const stringDate : string = value.toString().slice(0,10)
    const dateDate : Date = new Date(stringDate)
    const month : string = dateDate.toLocaleString('en-GB', { month: 'long', day:'numeric'})
    const year : string = dateDate.toLocaleString('en-GB', {year: 'numeric'})
    const date : string = month.split(' ').reverse().join(' ')
    const finalDate : string = date.charAt(0).toUpperCase() + date.slice(1) + ', ' + year
    return finalDate 
        }
    }
