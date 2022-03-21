import useListItemSwitcher from './useListItemSwitcher';

function TeamSlider({children}) {
    const [currentTeamMember, nextFrame, previousFrame] = useListItemSwitcher(children);

    return (
        <>
            {currentTeamMember}
            <nav>
                <button onClick={previousFrame}>Previous</button>
                <button onClick={nextFrame}>Next</button>
            </nav>
        </>
    );
}

export default TeamSlider; 