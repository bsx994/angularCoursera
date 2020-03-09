import { Dish } from './dish';

export const DISHES: Dish[] = [
	{ 
		id: '0',
		name: 'Uthappizza', 
		image: '/assets/images/uthappizza.png', 
		category: 'mains', 
		featured: true, 
		label: 'Hot', 
		price: '4.99', 
		// tslint:disable-next-line:max-line-length 
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.' ,
        comments:[
            {
                rating: 5,
                comment: 'Imagine all the eatables, livin in conFision!',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish i counld get it.',
                author: 'Pault McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It you birthday, we are gonna party',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
        ]
	},
	{
		id: '1', 
		name: 'Zucchipakoda', 
		image: '/assets/images/zucchipakoda.png', 
		category: 'appetizer', 
		featured: false, 
		label: 'New', 
		price: '1.99', 
        description: 'Deep fried Zucchini coated with mildly spiced chickpea flour batter accompanied with a sweet-tangy ' ,
        comments:[
            {
                rating: 5,
                comment: 'Imagine all the eatables, livin in conFision!',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish i counld get it.',
                author: 'Pault McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It you birthday, we are gonna party',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
      
        ]
	},
	{
		id: '2', 
		name: 'Vadonut', 
		image: '/assets/images/vadonut.png', 
		category: 'appetizer', 
		featured: false, 
		label: 'New', 
		price: '1.99', 
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments:[
            {
                rating: 5,
                comment: 'Imagine all the eatables, livin in conFision!',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish i counld get it.',
                author: 'Pault McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It you birthday, we are gonna party',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
        ]
	},		
	{
		id: '3',
		name: 'ElaiCheese Cake', 
		image: '/assets/images/elaicheesecake.png',
		category: 'dessert', 
		featured: false, 
		label: '', 
		price: '2.99', 
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms' ,
        comments:[
            {
                rating: 5,
                comment: 'Imagine all the eatables, livin in conFision!',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish i counld get it.',
                author: 'Pault McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It you birthday, we are gonna party',
                author: 'john lemon',
                date: '2012-10-16T17:57:28.556094Z'
            }
        ]
	}
]