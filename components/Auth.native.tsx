import { Platform } from 'react-native'
import * as AppleAuthentication from 'expo-apple-authentication'
import { supabase } from '@/lib/supabase'

export function Auth() {
    if (Platform.OS === 'ios')
        return (
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={5}
                style={{ width: 200, height: 64 }}
                onPress={async () => {
                    try {
                        const credential = await AppleAuthentication.signInAsync({
                            requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL,
                            ],
                        })
                        // Sign in via Supabase Auth.
                        if (credential.identityToken) {
                            const {
                                error,
                                data: { user },
                            } = await supabase.auth.signInWithIdToken({
                                provider: 'apple',
                                token: credential.identityToken,
                            })
                            console.log(JSON.stringify({ error, user }, null, 2))
                            if (!error) {
                                // User is signed in.
                            }
                        } else {
                            throw new Error('No identityToken.')
                        }
                    } catch (e: unknown) {
                        if (e instanceof Error) {
                            if ('code' in e && e.code === 'ERR_REQUEST_CANCELED') {
                                // Handle when user cancels Apple sign-in
                                console.log("User canceled Apple sign-in.");
                            } else {
                                // Handle other errors
                                console.error("Apple sign-in error:", e.message);
                            }
                        } else {
                            console.error("Unknown error during Apple sign-in", e);
                        }
                    }
                }}
            />
        )
    return <>{/* Implement Android Auth options. */}</>
}