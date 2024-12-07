import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import Button from '../../components/common/Button';
import { SubscriptionContext } from '../../context/SubscriptionContext';
import { upgradeSubscription } from '../../services/api/subscriptionApi';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const UpgradeScreen = ({ route, navigation }) => {
  const { plan } = route.params;
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { confirmPayment } = useStripe();
  const { updateSubscription } = useContext(SubscriptionContext);

  const handleUpgrade = async () => {
    if (!name) {
      Alert.alert('Error', 'Please enter the name on the card');
      return;
    }

    setLoading(true);

    try {
      // In a real app, you would create a payment intent on your server
      const { clientSecret } = await upgradeSubscription(plan.id);

      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        type: 'Card',
        billingDetails: { name },
      });

      if (error) {
        Alert.alert('Error', error.message);
      } else if (paymentIntent) {
        updateSubscription(plan);
        Alert.alert('Success', `You have successfully upgraded to the ${plan.name} plan.`, [
          { text: 'OK', onPress: () => navigation.navigate('Main') }
        ]);
      }
    } catch (error) {
      console.error('Error upgrading subscription:', error);
      Alert.alert('Error', 'An error occurred while processing your payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upgrade to {plan.name}</Text>
      <Text style={styles.price}>${plan.price}/month</Text>

      <TextInput
        style={styles.input}
        placeholder="Name on card"
        value={name}
        onChangeText={setName}
      />

      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={styles.cardField}
        style={styles.cardFieldContainer}
      />

      <Button
        title={loading ? 'Processing...' : 'Confirm Upgrade'}
        onPress={handleUpgrade}
        disabled={loading}
        style={styles.upgradeButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: 8,
  },
  price: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  cardFieldContainer: {
    height: 50,
    marginBottom: 24,
  },
  cardField: {
    backgroundColor: colors.white,
    borderRadius: 8,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  upgradeButton: {
    marginTop: 16,
  },
});

export default UpgradeScreen;

