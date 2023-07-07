import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  className?: string;
  onClick?: () => void;
  isTodaysDate?: boolean;
}

const Cell: React.FC<Props> = ({
  isTodaysDate = false,
  onClick,
  className,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "h-12 md:h-16 flex items-center justify-center border",
        {
          "bg-blue-600 hover:bg-blue-500 text-white": isTodaysDate,
        },
        { "cursor-pointer hover:bg-gray-100 active:bg-gray-200": !!onClick },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
