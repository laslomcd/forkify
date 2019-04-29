import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = '28d154f837aebf25061bdf41554cbf23';
    
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch(error) {
            alert(error);
        }
    
    }

}



// 28d154f837aebf25061bdf41554cbf23
// https://www.food2fork.com/api/search
// https://cors-anywhere.herokuapp.com/



