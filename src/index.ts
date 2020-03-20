import { Linking } from 'react-native';

/**
 * 打开qq
 */
export default function open_qq(): Promise<boolean> {
	return Linking.openURL('mqq://');
}
