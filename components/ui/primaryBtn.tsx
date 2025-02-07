import { ButtonProps, TouchableOpacity, Text } from "react-native";

interface PrimaryButtonProps extends ButtonProps {
  onPress: () => void;
  title: string;
  isDisabled?: boolean;
  isRounded?: boolean;
  classname?: string;
  isUppercase?: boolean;
  titleStyle?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  title,
  isDisabled = false,
  isRounded = false,
  classname,
  isUppercase = true,
  titleStyle,
  ...props
}) => {
  // Helper function to combine className strings
  const combineClasses = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      className={combineClasses(
        isRounded ? "rounded-full" : "rounded-md",
        "bg-brandprimary shadow-sm text-center w-full p-3 flex-row items-center justify-center",
        classname
      )}
      {...props}>
      <Text
        className={combineClasses(
          "text-black font-montserrat font-bold text-center",
          isUppercase ? "uppercase" : "",
          titleStyle
        )}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export { PrimaryButton };
