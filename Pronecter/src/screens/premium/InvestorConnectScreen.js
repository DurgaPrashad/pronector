import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import colors from '../../styles/colors';

const investors = [
  { id: '1', name: 'Alice Johnson', firm: 'Tech Ventures', avatar: 'https://example.com/alice.jpg' },
  { id: '2', name: 'Bob Williams', firm: 'Growth Capital', avatar: 'https://example.com/bob.jpg' },
  { id: '3', name: 'Carol Brown', firm: 'Angel Investors Network', avatar: 'https://example.com/carol.jpg' },
];

const InvestorConnectScreen = ({ navigation }) => {
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  const handleInvestorPress = (investor) => {
    setSelectedInvestor(investor);
  };

  const handleConnect = () => {
    if (selectedInvestor) {
      // Implement connection logic here
      console.log('Connecting with investor:', selectedInvestor);
    }
  };

  const renderInvestorItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.investorItem, selectedInvestor?.id === item.id && styles.selectedInvestor]}
      onPress={() => handleInvestorPress(item)}
    >
      <Avatar source={{ uri: item.avatar }} size={50} />
      <View style={styles.investorInfo}>
        <Text style={styles.investorName}>{item.name}</Text>
        <Text style={styles.investorFirm}>{item.firm}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with Investors</Text>
      <FlatList
        data={investors}
        renderItem={renderInvestorItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <Button
        title="Request Connection"
        onPress={handleConnect}
        disabled={!selectedInvestor}
        style={styles.connectButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.text,
  },
  list: {
    flex: 1,
  },
  investorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: colors.lightGray,
  },
  selectedInvestor: {
    backgroundColor: colors.primary + '20', // 20% opacity
  },
  investorInfo: {
    marginLeft: 12,
  },
  investorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  investorFirm: {
    fontSize: 14,
    color: colors.darkGray,
  },
  connectButton: {
    marginTop: 16,
  },
});

export default InvestorConnectScreen;

