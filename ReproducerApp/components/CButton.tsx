import React from 'react';
import {StyleSheet, UnistylesVariants} from 'react-native-unistyles';
import {Pressable, Text} from 'react-native';
import {CText, TextVariants} from './CText';

type ButtonVariants = UnistylesVariants<typeof styles>;
interface CustomButtonProps extends ButtonVariants {
  text: string;
}

export const CButton = ({
  buttonType = 'primary',
  isDisabled,
  text,
}: CustomButtonProps) => {
  styles.useVariants({
    buttonType,
    isDisabled,
    /* Size and color shouldn't generally be here since they are inside CText as well as themedText styles are in CText
      but put them for testing purposes */
    size: 'lg',
    color: 'main',
  });

  return (
    <>
      {/* Comment out top Pressable and the below one starts working as intended.
        It seems it is related how CButton component is using useVariants as well as CText is also using useVariants */}
      <Pressable style={styles.baseButton}>
        <CText text={text} size={'lg'} color={'error'} />
      </Pressable>
      {/* ---------------- */}

      <Pressable style={styles.baseButton}>
        <Text style={styles.themedText}>{text} WORKS</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  baseButton: {
    minHeight: 56,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    overflow: 'hidden',

    variants: {
      buttonType: {
        primary: {backgroundColor: theme.colors.buttons.primary},
        secondary: {backgroundColor: theme.colors.buttons.secondary},
        success: {backgroundColor: theme.colors.buttons.success},
        danger: {backgroundColor: theme.colors.buttons.danger},

        default: {backgroundColor: theme.colors.buttons.primary},
      },
      isDisabled: {
        true: {opacity: 0.4},
      },
    },
  },

  themedText: {
    variants: {
      size: {
        xxs: {fontSize: rt.fontScale * theme.fonts.sizes.xxs},
        xs: {fontSize: rt.fontScale * theme.fonts.sizes.xs},
        sm: {fontSize: rt.fontScale * theme.fonts.sizes.sm},
        md: {fontSize: rt.fontScale * theme.fonts.sizes.md},
        lg: {fontSize: rt.fontScale * theme.fonts.sizes.lg},
        xl: {fontSize: rt.fontScale * theme.fonts.sizes.xl},
        xxl: {fontSize: rt.fontScale * theme.fonts.sizes.xxl},
      },
      color: {
        main: {color: theme.colors.texts.main},
        link: {color: theme.colors.texts.link},
        error: {color: theme.colors.texts.error},

        default: {color: theme.colors.texts.main},
      },
      isCentered: {
        true: {
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      isFlexed: {
        true: {
          flex: 1,
        },
      },
    },
  },
}));

const TEXTS: Record<NonNullable<ButtonVariants['buttonType']>, TextVariants> = {
  primary: {color: 'main', size: 'md'},
  danger: {color: 'main', size: 'lg'},
  secondary: {color: 'link', size: 'md'},
  success: {color: 'link', size: 'sm'},
};
