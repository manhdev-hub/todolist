import { useCallback, useState } from 'react';

const useToggle = (initStatus = false) => {
    const [status, setStatus] = useState<boolean>(initStatus);

    const onToggle = (newStatus?: boolean) => {
        setStatus(typeof newStatus === 'boolean' ? newStatus : !status);
    };

    const onToggleOnly = () => {
        setStatus(!status);
    };

    const onOpen = useCallback(() => {
        setStatus(true);
    }, []);

    const onClose = useCallback(() => {
        setStatus(false);
    }, []);

    return [status, onOpen, onClose, onToggle, onToggleOnly] as const;
};

export default useToggle;
