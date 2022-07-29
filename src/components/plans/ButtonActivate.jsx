import React from "react";
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

function ButtonActivate() {
    const clipboard = useClipboard({ timeout: 500 });

    return (
        <Button
            color={clipboard.copied ? 'teal' : '#387BFF'}
            onClick={() => clipboard.copy('Hello, world!')}
            style={{fontSize:'20px'}}
        >
            {clipboard.copied ? 'Saved' : 'Activate'}
        </Button>
    );
}

export default ButtonActivate;