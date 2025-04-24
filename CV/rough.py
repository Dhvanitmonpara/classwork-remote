import matplotlib.pyplot as plt

years = [2006 + x for x in range(16)]
weights = [80, 83, 84, 90, 78, 56, 45, 78, 76, 56, 78, 89, 88, 90, 93, 91]

plt.plot(years, weights)
plt.show()