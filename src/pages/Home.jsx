import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaChartLine,
  FaServer,
  FaExchangeAlt,
  FaUsers,
  FaCoins,
  FaCubes,
  FaCube,
  FaNetworkWired,
  FaChartPie,
  FaArrowRight,
  FaAngleRight,
  FaGlobe,
} from "react-icons/fa";
import Card from "../components/common/Card";
import StatCard from "../components/common/StatCard";
import Table from "../components/common/Table";
import HashLink from "../components/common/HashLink";
import Badge from "../components/common/Badge";
import Loading from "../components/common/Loading";
import {
  formatNumber,
  formatCurrency,
  timeAgo,
  shortenAddress,
  formatCrypto,
} from "../utils/formatters";

const Home = () => {
  const [stats, setStats] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, we'd fetch this data from API
    // For demo purposes, using mock data
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      console.log("Fetching dashboard data...");

      try {
        // Simulating API call delay
        await new Promise((resolve) => {
          setTimeout(() => {
            console.log("Creating mock data for dashboard...");

            // Mock transactions data
            const mockTransactions = Array(20)
              .fill(0)
              .map((_, i) => ({
                hash: `0x${Math.random().toString(16).substring(2, 64)}`,
                from: `erd1${Math.random().toString(16).substring(2, 40)}`,
                to: `erd1${Math.random().toString(16).substring(2, 40)}`,
                value: Math.random() * 1000,
                fee: Math.random() * 0.01,
                timestamp: Math.floor(Date.now() / 1000) - i * 60,
                status:
                  Math.random() > 0.1
                    ? "success"
                    : Math.random() > 0.5
                    ? "pending"
                    : "failed",
              }));

            // Mock blocks data
            const mockBlocks = Array(20)
              .fill(0)
              .map((_, i) => ({
                hash: `0x${Math.random().toString(16).substring(2, 64)}`,
                nonce: 5000000 - i,
                shard: Math.floor(Math.random() * 3),
                txCount: Math.floor(Math.random() * 50),
                size: Math.floor(Math.random() * 1000000),
                timestamp: Math.floor(Date.now() / 1000) - i * 6,
              }));

            // Mock stats data
            const mockStats = {
              price: 52.35,
              priceChange: -2.1,
              marketCap: 1235000000,
              totalTransactions: 124578962,
              blockHeight: 18436782,
              activeValidators: 3200,
              stakedValue: 231678234567890,
              stakedPercent: 56.2,
              tps: 1287,
              accounts: 2184673,
              activeAccounts24h: 47825,
              apy: 12.45,
              epochLength: "6d 2h 15m",
              circulatingSupply: 24567890,
              nfts: 123456,
              smartContracts: 5487,
            };

            // Set state with mock data
            setStats(mockStats);
            setBlocks(mockBlocks);
            setTransactions(mockTransactions);
            console.log("Dashboard data loaded successfully");

            resolve();
          }, 800);
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError(
          "Failed to load dashboard data. Please try refreshing the page."
        );

        // Set default values in case of error
        setStats({
          price: 0,
          priceChange: 0,
          marketCap: 0,
          totalTransactions: 0,
          blockHeight: 0,
          activeValidators: 0,
          stakedValue: 0,
          stakedPercent: 0,
          tps: 0,
          accounts: 0,
          activeAccounts24h: 0,
          apy: 0,
          epochLength: "0d 0h 0m",
          circulatingSupply: 0,
          nfts: 0,
          smartContracts: 0,
        });
        setTransactions([]);
        setBlocks([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim();

    // Handle different search types based on query format
    if (query.startsWith("erd1") && query.length > 40) {
      // Account address
      navigate(`/account/${query}`);
    } else if (query.startsWith("0x") || query.length >= 64) {
      // Transaction hash
      navigate(`/transaction/${query}`);
    } else if (!isNaN(query)) {
      // Block number
      navigate(`/block/${query}`);
    } else {
      // Token name or other search
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const getStatusClass = (status) => {
    const statusMap = {
      success:
        "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      pending:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      failed: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
    };

    return (
      statusMap[status] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    );
  };

  const getShardBadgeClass = (shard) => {
    if (shard === "metachain")
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";

    const shardColors = {
      0: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      1: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      2: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
    };

    return (
      shardColors[shard] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    );
  };

  const getTrendClass = (value) => {
    if (value > 0) return "text-green-600 dark:text-green-400";
    if (value < 0) return "text-red-600 dark:text-red-400";
    return "";
  };

  // Table columns for transactions
  const txColumns = [
    {
      header: "Tx Hash",
      key: "hash",
      cell: (row) => <HashLink hash={row.hash} type="tx" length="medium" />,
    },
    {
      header: "From",
      key: "from",
      cell: (row) => <HashLink hash={row.from} type="account" length="short" />,
    },
    {
      header: "To",
      key: "to",
      cell: (row) => <HashLink hash={row.to} type="account" length="short" />,
    },
    {
      header: "Value",
      key: "value",
      cell: (row) => formatCrypto(row.value, 18, "REWA"),
    },
    {
      header: "Status",
      key: "status",
      cell: (row) => (
        <Badge variant={getStatusClass(row.status)}>{row.status}</Badge>
      ),
    },
    {
      header: "Age",
      key: "timestamp",
      cell: (row) => timeAgo(row.timestamp),
    },
  ];

  // Table columns for blocks
  const blockColumns = [
    {
      header: "Height",
      key: "nonce",
      cell: (row) => (
        <Link
          to={`/block/${row.nonce}`}
          className="text-primary hover:underline"
        >
          {formatNumber(row.nonce)}
        </Link>
      ),
    },
    {
      header: "Hash",
      key: "hash",
      cell: (row) => <HashLink hash={row.hash} type="block" length="medium" />,
    },
    {
      header: "Shard",
      key: "shard",
      cell: (row) => (
        <Badge variant={getShardBadgeClass(row.shard)}>
          {row.shard === "metachain" ? "Metachain" : `Shard ${row.shard}`}
        </Badge>
      ),
    },
    {
      header: "Txns",
      key: "txCount",
      cell: (row) => formatNumber(row.txCount),
    },
    {
      header: "Size",
      key: "size",
      cell: (row) => `${formatNumber(row.size, 0)} B`,
    },
    {
      header: "Age",
      key: "timestamp",
      cell: (row) => timeAgo(row.timestamp),
    },
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Loading className="h-16 w-16 mx-auto my-20" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg mb-8">
          {error}
          <button
            onClick={() => window.location.reload()}
            className="ml-4 text-primary hover:underline"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 p-4 rounded-lg mb-8">
          No dashboard data available. Please try again later.
          <button
            onClick={() => window.location.reload()}
            className="ml-4 text-primary hover:underline"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      {/* Search hero */}
      <div className="relative mb-10">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-700 dark:to-teal-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">
            Dharitri Blockchain Explorer
          </h1>
          <p className="text-lg mb-6 max-w-2xl">
            Explore transactions, blocks, accounts and smart contracts on the
            Dharitri blockchain.
          </p>
          <form onSubmit={handleSearch} className="relative max-w-3xl">
            <input
              type="text"
              placeholder="Search by Address / Transaction / Block / Token"
              className="w-full py-3 pl-12 pr-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute inset-y-0 left-0 pl-3 flex items-center"
            >
              <FaSearch className="h-6 w-6 text-white/70" />
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-3 mr-4">
                    <FaCoins className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">REWA Price</h3>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold">
                        ${stats?.price?.toFixed(2) || "0.00"}
                      </p>
                      <span
                        className={`ml-2 text-sm ${getTrendClass(
                          stats?.priceChange || 0
                        )}`}
                      >
                        {stats?.priceChange > 0 ? "+" : ""}
                        {stats?.priceChange?.toFixed(2) || "0.00"}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Market Cap: ${formatNumber(stats?.marketCap || 0)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3 mr-4">
                    <FaExchangeAlt className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Transactions</h3>
                    <p className="text-2xl font-bold">
                      {formatNumber(stats?.totalTransactions || 0)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      TPS: {stats?.tps || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3 mr-4">
                    <FaUsers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Accounts</h3>
                    <p className="text-2xl font-bold">
                      {formatNumber(stats?.accounts || 0)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Active: {formatNumber(stats?.activeAccounts24h || 0)}{" "}
                      (24h)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
                <div className="flex items-center">
                  <FaCubes className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Block Height
                  </h3>
                </div>
                <p className="text-xl font-semibold mt-2">
                  {formatNumber(stats?.blockHeight || 0)}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
                <div className="flex items-center">
                  <FaServer className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Validators
                  </h3>
                </div>
                <p className="text-xl font-semibold mt-2">
                  {formatNumber(stats?.activeValidators || 0)}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
                <div className="flex items-center">
                  <FaChartPie className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Staked
                  </h3>
                </div>
                <p className="text-xl font-semibold mt-2">
                  {stats?.stakedPercent?.toFixed(1) || "0.0"}%
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
                <div className="flex items-center">
                  <FaCoins className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Supply
                  </h3>
                </div>
                <p className="text-xl font-semibold mt-2">
                  {formatNumber(stats?.circulatingSupply || 0)} REWA
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
                <div className="flex items-center">
                  <FaGlobe className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    NFTs
                  </h3>
                </div>
                <p className="text-xl font-semibold mt-2">
                  {formatNumber(stats?.nfts || 0)}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
                <div className="flex items-center">
                  <FaNetworkWired className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Smart Contracts
                  </h3>
                </div>
                <p className="text-xl font-semibold mt-2">
                  {formatNumber(stats?.smartContracts || 0)}
                </p>
              </div>
            </div>

            {/* Tables Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <div className="w-full md:w-1/2">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                  <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold flex items-center">
                      <FaExchangeAlt className="mr-2 text-primary" />
                      Latest Transactions
                    </h2>
                    <Link
                      to="/transactions"
                      className="text-primary hover:text-primary-dark flex items-center text-sm"
                    >
                      View All <FaAngleRight className="ml-1" />
                    </Link>
                  </div>
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {transactions.map((tx) => (
                      <div
                        key={tx.hash}
                        className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <Link
                            to={`/transaction/${tx.hash}`}
                            className="text-primary hover:underline font-mono"
                          >
                            {shortenAddress(tx.hash, 8)}
                          </Link>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${getStatusClass(
                              tx.status
                            )}`}
                          >
                            {tx.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div>
                            <span className="text-gray-500 dark:text-gray-400 mr-1">
                              From:
                            </span>
                            <Link
                              to={`/account/${tx.from}`}
                              className="text-primary hover:underline font-mono"
                            >
                              {shortenAddress(tx.from, 6)}
                            </Link>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400 mr-1">
                              To:
                            </span>
                            <Link
                              to={`/account/${tx.to}`}
                              className="text-primary hover:underline font-mono"
                            >
                              {shortenAddress(tx.to, 6)}
                            </Link>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400 mr-1">
                              Amount:
                            </span>
                            <span>{formatCrypto(tx.value)}</span>
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {timeAgo(tx.timestamp)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                  <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold flex items-center">
                      <FaCubes className="mr-2 text-primary" />
                      Latest Blocks
                    </h2>
                    <Link
                      to="/blocks"
                      className="text-primary hover:text-primary-dark flex items-center text-sm"
                    >
                      View All <FaAngleRight className="ml-1" />
                    </Link>
                  </div>
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {blocks.map((block) => (
                      <div
                        key={block.hash}
                        className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <Link
                            to={`/block/${block.nonce}`}
                            className="flex items-center text-primary hover:underline"
                          >
                            <FaCube className="mr-2" />
                            {block.nonce}
                          </Link>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${getShardBadgeClass(
                              block.shard
                            )}`}
                          >
                            {block.shard === "metachain"
                              ? "Metachain"
                              : `Shard ${block.shard}`}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div>
                            <span className="text-gray-500 dark:text-gray-400 mr-1">
                              Hash:
                            </span>
                            <span className="font-mono">
                              {shortenAddress(block.hash, 8)}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400 mr-1">
                              Txns:
                            </span>
                            <span>{block.txCount}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400 mr-1">
                              Size:
                            </span>
                            <span>{formatNumber(block.size)} bytes</span>
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {timeAgo(block.timestamp)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaChartLine className="text-primary mr-2 text-xl" />
                  <h2 className="text-lg font-semibold">
                    Statistics & Analytics
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore detailed network statistics, charts, and analytics
                  about the Dharitri ecosystem.
                </p>
                <Link
                  to="/analytics"
                  className="inline-flex items-center text-primary hover:text-primary-dark"
                >
                  View Analytics <FaArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaCoins className="text-primary mr-2 text-xl" />
                  <h2 className="text-lg font-semibold">Tokens & NFTs</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Browse and search all tokens and NFT collections on the
                  Dharitri blockchain.
                </p>
                <div className="flex space-x-4">
                  <Link
                    to="/tokens"
                    className="inline-flex items-center text-primary hover:text-primary-dark"
                  >
                    View Tokens <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    to="/nfts"
                    className="inline-flex items-center text-primary hover:text-primary-dark"
                  >
                    View NFTs <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaServer className="text-primary mr-2 text-xl" />
                  <h2 className="text-lg font-semibold">
                    Validators & Staking
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore validators securing the Dharitri network and staking
                  statistics.
                </p>
                <Link
                  to="/validators"
                  className="inline-flex items-center text-primary hover:text-primary-dark"
                >
                  View Validators <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <FaGlobe className="mr-2 text-primary" />
            Explorer Resources
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            The Explorer is your window into the Dharitri blockchain. Use it to
            track transactions, view blocks, and learn more about the Dharitri
            ecosystem.
          </p>
          <Link
            to="/statistics"
            className="text-primary hover:underline text-sm flex items-center"
          >
            View Network Statistics
            <FaArrowRight className="ml-1 text-xs" />
          </Link>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <FaCubes className="mr-2 text-primary" />
            About Blocks
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Blocks are the fundamental units that make up the Dharitri
            blockchain.
          </p>
          <Link
            to="/blocks"
            className="text-primary hover:underline text-sm flex items-center"
          >
            Explore Blocks
            <FaArrowRight className="ml-1 text-xs" />
          </Link>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <FaExchangeAlt className="mr-2 text-primary" />
            About Transactions
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Transactions record transfers of REWA and other tokens, smart
            contract interactions, and other operations.
          </p>
          <Link
            to="/transactions"
            className="text-primary hover:underline text-sm flex items-center"
          >
            Explore Transactions
            <FaArrowRight className="ml-1 text-xs" />
          </Link>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <FaServer className="mr-2 text-primary" />
            About Validators
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Explore validators securing the Dharitri network and staking
            statistics.
          </p>
          <Link
            to="/validators"
            className="text-primary hover:underline text-sm flex items-center"
          >
            View Validators
            <FaArrowRight className="ml-1 text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
