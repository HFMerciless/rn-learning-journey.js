/*
//GUNSTORE

interface Product { name: string; price: number; quantity: number; }

const products: Product[] = [{ name: 'Pistol', price: 10, quantity: 5}
, { name: 'SubMachine Gun', price: 20, quantity: 2}
, { name: 'Machine Gun', price: 30, quantity: 3}
, { name: 'Long Barrel Rifle', price: 50, quantity: 1}];

function getProductPrice(product: Product): number { return product.price * product. quantity;}

const totalPrice = products.reduce((prev, curr) => prev + getProductPrice(curr), 0);
console.log(`Total Price: ${totalPrice}`);

function getMostExpensiveProduct(products: Product[]): Product { return products.reduce((prev, curr) => prev.price > curr.price ? prev: curr ); }

const mostExpensiveProduct = getMostExpensiveProduct(products)

console.log(`Most Expensive Product: ${mostExpensiveProduct.name} with ${mostExpensiveProduct.price} price`);
*/

/*
//LEADERBOARD

interface Player { name: string; score: number; isActive: boolean; }

let players: Player[] = [{ name: 'Player 1', score: 100, isActive: true}
, { name: 'Player 2', score: 980, isActive: true}
, { name: 'Player 3', score: 890, isActive: false}
, { name: 'Player 4', score: 730, isActive: true}
, { name: 'Player 5', score: 870, isActive: false}];

function getActivePlayers(players: Player[]): Player[] { return players.filter(player => player.isActive);}

const activePlayers = getActivePlayers(players);

console.log(`Active Players: ${activePlayers.length}`);

function getTopPlayer(players: Player[]): Player | undefined { return players.reduce((prev, curr) => prev.score > curr.score ? prev: curr ); }

const topPlayer = getTopPlayer(players)

console.log(`Top Player: ${topPlayer?.name} with ${topPlayer?.score} points`);*/
