import React from "react";
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

function Overview() {
    const clipboard = useClipboard({ timeout: 500 });

    return (
        <Button
            color={clipboard.copied ? 'teal' : 'blue'}
            onClick={() => clipboard.copy('Hello, world!')}
        >
            {clipboard.copied ? 'Saved' : 'Activate'}
        </Button>
    );
}

export default Overview;