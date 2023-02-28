import React, { memo } from 'react';
import { Text } from './shared';

type HeadingProps = {
    children: string | React.ReactNode;
};

const Heading = (props: HeadingProps) => {
    const { children, ...rest } = props;
    return (
        <Text variant="h6" fontWeight={700} textAlign="center" mb={{ lg: 10, md: 7, sm: 5 }} {...rest}>
            {children}
        </Text>
    );
};

export default memo(Heading);
