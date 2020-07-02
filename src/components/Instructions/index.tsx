import React, { useEffect, useContext } from 'react';
import { Loader, Grid } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import Instruction from './components/Instruction';
import { InstructionsContext } from '../../services/InstructionsContext';
import User from '../User';
import Threads from './components/Threads';
import ActionsInstructions from './components/ActionsInstructions';
import { InstructionsActionTypes } from '../../types/types';
import { reviver } from '../../services/JSONParseRegExReviver';
const instructionsJson = require('../../instructions.json');

const Instructions = () => {
    const { dispatch, actions, bot, general } = useContext(InstructionsContext);

    useEffect(() => {
        dispatch({
            type: InstructionsActionTypes.setInstructions,
            instructions: JSON.parse(JSON.stringify(instructionsJson), reviver),
        });
    }, [dispatch]);

    if (!actions) return <Loader active />;

    return (
        <Grid>
            <Grid.Column width={3}>{bot && <User {...bot} />}</Grid.Column>
            <Grid.Column width={13}>
                <Container>
                    {general ? (
                        <>
                            <Instruction
                                name=""
                                input={general}
                                forceOpen={true}
                            />
                            <Threads />
                            <ActionsInstructions />
                        </>
                    ) : (
                        <Loader active />
                    )}
                </Container>
            </Grid.Column>
        </Grid>
    );
};

export default Instructions;
