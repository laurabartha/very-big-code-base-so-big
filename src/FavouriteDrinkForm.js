import useInputValue from './useInputValue';

const FavouriteDrinkForm = () => {
    const [favDrink, handleDrinkChange, resetDrink] = useInputValue('');
    const [favBubblyDrink, hanldeBubblyDrinkChange, resetBubbles] = useInputValue('');




    const handleSubmit = (event) => {
        event.preventDefault();
        // form submitting logic here

        // reset form after submit:
        resetDrink();
        resetBubbles();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="favDrink">What is your favourite Drink?</label>
            <input value={favDrink} onChange={handleDrinkChange} type="text" id="favDrink" />

            <label htmlFor="favBubblyDrink">What is your favourite Bubbly Drink?</label>
            <input value={favBubblyDrink} onChange={hanldeBubblyDrinkChange} type="text" id="favBubblyDrink" />
            <button>Save</button>
        </form>
    )
}
export default FavouriteDrinkForm;