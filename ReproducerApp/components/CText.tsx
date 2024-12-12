import React from 'react';
import {Text, TextProps} from 'react-native';
import {StyleSheet, UnistylesVariants} from 'react-native-unistyles';

export type TextVariants = UnistylesVariants<typeof styles>;

interface TypographyProps extends Omit<TextProps, 'style'>, TextVariants {
  text: string;
}

export const CText = ({
  size,
  color,
  isCentered,
  isFlexed,
  text,
  ...textProps
}: TypographyProps) => {
  styles.useVariants({
    size: size ?? 'md',
    color,
    isCentered,
    isFlexed,
  });

  const tText = text;
  const content = tText || textProps.children;

  return (
    <Text {...textProps} style={styles.themedText}>
      {content}
    </Text>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  themedText: {
    variants: {
      /* Can be based on type instead of size, e.g. "header", "paragraph", "title" */
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
