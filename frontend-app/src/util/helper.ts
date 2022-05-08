export const statusBackgroundColor = (status: string | null) => {
    if (status === '1') return '#d4f8e7';
    else if (status === '2') return '#fdf4d5';
    else if (status === '3') return '#feefe7';

    return 'transparent';
};

export const statusTextColor = (status: string | null) => {
    if (status === '1') return '#02331b';
    else if (status === '2') return '#5e4a03';
    else if (status === '3') return '#660303';

    return '#777';
};