import './StaticTooltip.scss';

export default function StaticTooltip (props) {
  const {
    mainTitle,
    firstTitle,
    firstSubtitle,
    secondTitle,
    secondSubtitle,
    tooltipPosition,
    onlyDot,
    className,
    style
  } = props;

  return (
    <div
      style={style}
      className={`static-tooltip static-tooltip--${tooltipPosition} ${className}`}
    >
      <svg
        className='static-tooltip__dot'
        xmlns="http://www.w3.org/2000/svg"
        width="5.2rem"
        height="5rem"
        fill="none"
        viewBox="0 0 52 50"
      >
        <path fill="#14489D" d="M32.311 33.335a2 2 0 0 1-1.747 1.026h-8.498a2 2 0 0 1-1.735-1.004l-4.263-7.43a2 2 0 0 1 .007-2.004l4.254-7.292a2 2 0 0 1 1.727-.992h8.517a2 2 0 0 1 1.74 1.014l4.133 7.292a2 2 0 0 1 .007 1.96l-4.142 7.43Z" /><path stroke="#14489D" stroke-opacity=".1" stroke-width="15" d="M13.85 12.852a9.5 9.5 0 0 1 8.207-4.713h8.517a9.5 9.5 0 0 1 8.265 4.816l-6.464 3.663 6.464-3.663 4.132 7.292m-29.12-7.395 29.12 7.395m-29.12-7.395-4.254 7.292a9.5 9.5 0 0 0-.034 9.515l6.505-3.733m-2.217-13.074 2.217 13.074m26.903-5.679a9.5 9.5 0 0 1 .033 9.309m-.033-9.309.033 9.309m-26.936-3.63L9.563 29.66l4.263 7.43a9.5 9.5 0 0 0 8.24 4.772h8.498M16.068 25.926l14.496 15.935m0 0a9.5 9.5 0 0 0 8.298-4.875m-8.298 4.875 8.298-4.875m0 0 4.142-7.43m-4.142 7.43 4.142-7.43" />
      </svg>

      {!onlyDot && (
        <div className="static-tooltip__tooltip">
          <span className='static-tooltip__title'>
            {mainTitle}
          </span>

            <div className='static-tooltip__tooltip-statistics'>
              <ul>
                <li>
                  <span>{firstTitle}</span>
                  <span>{firstSubtitle}</span>
                </li>

                <li>
                  <span>{secondTitle}</span>
                  <span>{secondSubtitle}</span>
                </li>
              </ul>
            </div>
        </div>
      )}
    </div>
  );
}
