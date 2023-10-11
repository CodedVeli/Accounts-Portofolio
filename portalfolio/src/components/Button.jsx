import className from 'classnames';

const finalClassName = className({
    'bg-blue-500': true,
    'text-yellow-500': false,
});

console.log(finalClassName);

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {

    console.log(rest);

    const classes = className(rest.className, 'border', 'px-3', 'py-1', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-600 bg-gray-500 text-white': secondary,
        'border-green-600 bg-green-500 text-white': success,
        'border-red-600 bg-red-500 text-white': danger,
        'border-yellow-600 bg-yellow-500 text-white': warning,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500':outline && primary,
        'text-yellow-600':outline && secondary,
        'text-green-600':outline && success,
        'text-red-600':outline && danger,
        'text-yellow-600':outline && warning,

    })
    
    let baseClassName = 'border  px-3 py-1 ';
    if (primary) {
        baseClassName += 'border-blue-600 bg-blue-500 text-white';
    }

    return (
        <div className=' gap-3'>
        <button {...rest} className={classes}>{children}          
        </button>
        </div>
    );
};

Button.propTypes = {
    checkVariation: ({ primary, secondary, success, warning, danger, }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
        if (count > 1) {
            return new Error('Only one variation can be provided to Button');
        }
    },
}

export default Button;